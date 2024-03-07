import "./App.css";
import { Component } from "react";
import { loadPosts } from "./Utils/load-posts";
import { Posts } from "./Component/Posts";

class App extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({ posts: postsAndPhotos });
  };

  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <Posts posts={posts} />
      </section>
    );
  }
}

export default App;
