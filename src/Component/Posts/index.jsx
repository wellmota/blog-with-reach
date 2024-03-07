import { PostCard } from "../PostCard";

export const Posts = ({ posts }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard
        key={post.id}
        title={post.title}
        body={post.body}
        cover={post.cover}
        id={post.id}
      >
        <h1>oi</h1>
      </PostCard>
    ))}
  </div>
);
