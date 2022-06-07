import React, { useState } from 'react' 


import BookTable from './components/BookTable';
import BookInput from './components/BookInput'; 


import { Book } from './models/book.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import './App.css'; 



export default function App() {
  const [books, setBooks] = useState([]);
//  window.addEventListener('DOMContentLoaded', loadBooksFromLocalStorage()); 

    function onBookCreate(title, author, isbn) {
    // loadBooksFromLocalStorage();
    // add the book to the books state 
    // create the book 
    const book = new Book(
      new Date().getTime(),
      title, 
      author, 
      isbn
    );

    setBooks([...books, book]); 
    saveBooksToLocalStorage();
  }

  function loadBooksFromLocalStorage(){
    const json = localStorage.getItem('books');
    if (json) {
      const bookArr = JSON.parse(json);
      setBooks(bookArr.map(x => Book.fromJSON(x))); 
    }
  }


  function onBookRemove(bookId) {
    // filter the books to keep books which don't have the id passed in 
    // update the book state with the filtered list 
    setBooks(books.filter((book) => book.id !== bookId)); 
    saveBooksToLocalStorage();
  }

  function saveBooksToLocalStorage(){
    const json = JSON.stringify(books);
    localStorage.setItem("books",json);
  }
  return (
    <div className="container my-5">
      <div className="card card-body text-center" >
        <h1>Library</h1>
        <hr></hr>
        <p></p>
        <BookInput onBookCreate={onBookCreate} />
        <BookTable 
          onBookRemove={onBookRemove}
          books={books} />
      </div>
    </div>
  )
}



