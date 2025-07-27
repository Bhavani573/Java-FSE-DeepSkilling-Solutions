import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
    };
  }

  // Method to fetch posts
  loadPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data }))
      .catch((error) => console.error("Error fetching posts:", error));
  };

  // componentDidMount - Called after component is mounted
  componentDidMount() {
    this.loadPosts();
  }

  // componentDidCatch - Error handling in lifecycle
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    alert("Something went wrong in the Posts component!");
    console.error("Error Info:", info);
  }

  // Render method
  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please try again later.</h2>;
    }

    return (
      <div>
        <h2>Blog Posts</h2>
        {this.state.posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
