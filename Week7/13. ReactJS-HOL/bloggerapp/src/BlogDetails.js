import React from 'react';

const BlogDetails = () => {
  const blogs = [
    { id: 1, title: 'React Basics', author: 'John' },
    { id: 2, title: 'ES6 Features', author: 'Sarah' }
  ];

  return (
    <div>
      <h2>📝 Blog Details</h2>
      {blogs.length > 0 ? (
        <ul>
          {blogs.map(blog => (
            <li key={blog.id}>{blog.title} by {blog.author}</li>
          ))}
        </ul>
      ) : (
        <p>No blogs available</p>
      )}
    </div>
  );
};

export default BlogDetails;
