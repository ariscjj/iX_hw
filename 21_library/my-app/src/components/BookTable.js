import React from 'react'

export default function TaskTable(props){
  // console.log(props)

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody >
          {
            props.books.map((book) => 
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.isbn}</td>
                <td>
                  <div onClick={() => props.onBookRemove(book.id)}>
                    <i className="bi bi-trash"></i>
                  </div>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>

    </div>

  )

}


