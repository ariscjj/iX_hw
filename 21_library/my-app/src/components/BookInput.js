import React, { useState } from 'react'; 

export default function BookInput(props){
  const [title, setTitle] = useState(""); 
  const [author, setAuthor] = useState(""); 
  const [isbn, setISBN] = useState(""); 

  function onBookFormSubmit(e){
    e.preventDefault();
    props.onBookCreate(title, author, isbn); 

    // clears out input
    
    setTitle('');
    setAuthor(''); 
    setISBN('');
  }
  
  return (
    <div>
      <form onSubmit={onBookFormSubmit}>
        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Title</label>
          <input 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text" 
            className="form-control"
            placeholder="Title" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Author</label>
          <input 
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            type="text" 
            className="form-control"
            placeholder="Author" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">ISBN</label>
          <input 
            value={isbn}
            onChange={(e) => setISBN(e.target.value)}

            type="text" 
            className="form-control"
            placeholder="ISBN" />
        </div>

        <button className="btn btn-outline-secondary" type="submit">
          Submit
        </button> 
      </form>
    </div>
  )

}
