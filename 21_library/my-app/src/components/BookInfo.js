import React from 'react'; 


export default function BookInfo(props) {
    return (
      <div className="container my-5">
        <label className="form-label">
          {props.name}
        </label>
        <input type="text" className="form-control" />
      </div>
  );

}; 

// export function SubmitBook(props) {

//   function onFormSubmit(e) {
//     e.preventDefault();

//     const book = new Book(
//       this.title.value,
//       this.author.value,
//       this.isbn.value,
//     );

//     this.books.push(book);

//     this.saveBooksToLocalStorage();
//     this.renderBookTable();
//   }

//   return (
//        <div className="d-grid gap-2 mt-4">
//           <button className="btn btn-outline-primary" type="submit" onClick = {onFormSubmit}>
//             Add Book
//           </button>
//        </div>
//   );

// }; 

// class Book {
//   constructor(title, author, isbn) {
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
//   }

//   static fromJSON(json) {
//     return new Book(
//       json.title,
//       json.author,
//       json.isbn,
//     );
//   }
// }

// class UI {
//   constructor() {
//     this.form = document.getElementById('form');

//     this.title = document.getElementById('title-input');
//     this.author = document.getElementById('author-input');
//     this.isbn = document.getElementById('isbn-input');

//     this.tableBody = document.getElementById('table-body');

//     this.form.addEventListener('submit', (e) => this.onFormSubmit(e));

//     this.books = [];
//     this.loadBooksFromLocalStorage();
//     this.renderBookTable();
//   }

//   onFormSubmit(e) {
//     e.preventDefault();

//     const book = new Book(
//       this.title.value,
//       this.author.value,
//       this.isbn.value,
//     );

//     this.books.push(book);

//     this.saveBooksToLocalStorage();
//     this.renderBookTable();
//   }

//   renderBookTable() {
//     this.tableBody.innerHTML = '';

//     for (let i = 0; i < this.books.length; i++) {
//       const book = this.books[i];

//       const tr = this.createBookTableRow(book);
//       this.tableBody.appendChild(tr);
//     }
//   }

//   createBookTableRow(book) {
//     const tr = document.createElement('tr');

//     const tdTitle = document.createElement('td');
//     const tdAuthor = document.createElement('td');
//     const tdISBN = document.createElement('td');
//     const tdActions = document.createElement('td');

//     tdTitle.innerHTML = book.title;
//     tdAuthor.innerHTML = book.author;
//     tdISBN.innerHTML = book.isbn;

//     const removeButton = this.createRemoveBookButton(book);
//     tdActions.appendChild(removeButton);

//     tr.appendChild(tdTitle);
//     tr.appendChild(tdAuthor);
//     tr.appendChild(tdISBN);
//     tr.appendChild(tdActions);

//     return tr;
//   }

//   createRemoveBookButton(book) {
//     const button = document.createElement('button');

//     button.setAttribute('class', 'btn btn-danger btn-sm');
//     button.innerHTML = 'X'
//     button.addEventListener('click', () => this.onRemoveBookClicked(book));

//     return button;
//   }

//   onRemoveBookClicked(book) {
//     this.books = this.books.filter((x) => {
//       return book.isbn !== x.isbn;
//     });

//     this.saveBooksToLocalStorage();
//     this.renderBookTable();
//   }

//   saveBooksToLocalStorage() {
//     const json = JSON.stringify(this.books);
//     localStorage.setItem('books', json);
//   }

//   loadBooksFromLocalStorage() {
//     const json = localStorage.getItem('books');
//     if (json) {
//       const bookArr = JSON.parse(json);
//       this.books = bookArr.map(x => Book.fromJSON(x));
//     }
//   }
// }

// const ui = new UI();



// export function BookSubmit(props) {

//   const myElement = <Car brand="Ford" />;

//   <tr>
//     <td> {props.title} </td>
//     <td> {props.author}</td>
//     <td> {props.isbn} </td>
//     <td> {props.action} </td>
//   </tr>

//     tdTitle.innerHTML = book.title;
//     tdAuthor.innerHTML = book.author;
//     tdISBN.innerHTML = book.isbn;

//     const removeButton = this.createRemoveBookButton(book);
//     tdActions.appendChild(removeButton);

//     tr.appendChild(tdTitle);
//     tr.appendChild(tdAuthor);
//     tr.appendChild(tdISBN);
//     tr.appendChild(tdActions);

//     return tr;
//   }

//     return (
//       <div className="container my-5">
//         <label className="form-label">
//           {props.name}
//         </label>
//         <input type="text" className="form-control" />
//       </div>
//   );

// }; 


