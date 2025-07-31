import React, { Component } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: 'books' // default view
    };
  }

  changeView = (viewName) => {
    this.setState({ view: viewName });
  };

  render() {
    // Conditional Rendering using if-else
    let content;
    if (this.state.view === 'books') {
      content = <BookDetails />;
    } else if (this.state.view === 'blogs') {
      content = <BlogDetails />;
    } else {
      content = <CourseDetails />;
    }

    return (
      <div style={{ textAlign: 'center' }}>
        <h1>📖 Blogger App</h1>

        {/* Buttons to switch views */}
        <button onClick={() => this.changeView('books')}>Show Books</button>
        <button onClick={() => this.changeView('blogs')}>Show Blogs</button>
        <button onClick={() => this.changeView('courses')}>Show Courses</button>

        {/* Rendering multiple components conditionally */}
        {content}

        {/* Another way: ternary operator */}
        <hr />
        <h3>Conditional Rendering with Ternary:</h3>
        {this.state.view === 'books' ? <BookDetails /> : <CourseDetails />}

        {/* Short Circuit Rendering */}
        <hr />
        <h3>Short Circuit Rendering:</h3>
        {this.state.view === 'blogs' && <BlogDetails />}
      </div>
    );
  }
}

export default App;
