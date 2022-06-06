import React from 'react' 
import BookInfo from './components/BookInfo'; 


export default function App() {
  return (
    <div className="container my-5 mt-5">
      <div className="card p-4">
        <h1 className="text-center">Library</h1>
        <form id="form">
          <BookInfo name="Title"/>
          <BookInfo name="Author"  />
          <BookInfo name="ISBN"  />
       <div class="d-grid gap-2 mt-4">
         <SubmitBook />
          <button class="btn btn-outline-primary" type="submit">
            Add Book
          </button>
        </div>
      </form>
      <table class="table mt-5" />
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody id="table-body">

      </tbody>




      </div>

    </div>
  );
}



