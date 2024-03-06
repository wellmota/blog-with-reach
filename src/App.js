import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postResponses = fetch("https://jsonplaceholder.typicode.com/posts");
    const photoResponses = fetch("https://jsonplaceholder.typicode.com/photos");
    const [posts, photos] = await Promise.all([postResponses, photoResponses]);
    const postsJson = await posts.json();
    const photosJson = await photos.json();
    const postsAndPhotos = postsJson.map((post, index) => {
      return {
        ...post,
        cover: photosJson[index].url,
      };
    });
    console.log(postsAndPhotos);
    this.setState({ posts: postsAndPhotos });
  };

  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    const { posts } = this.state;
    return (
      <section className="container">
        <div className="posts">
          {posts.map((post) => (
            <div className="post">
              <img src={post.cover} alt={post.title} />
              <div key={post.id} className="post-content">
                <h1 className="truncate-one-line">{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default App;
