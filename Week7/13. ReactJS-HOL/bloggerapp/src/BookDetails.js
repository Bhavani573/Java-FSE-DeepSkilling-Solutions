import React from 'react';

const BookDetails = () => {
  const books = [
    { id: 1, title: 'Learning React', author: 'Alex Banks' },
    { id: 2, title: 'JavaScript Guide', author: 'Douglas Crockford' },
    { id: 3, title: 'Clean Code', author: 'Robert C. Martin' }
  ];

  return (
    <div>
      <h2>📚 Book Details</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title} - {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
