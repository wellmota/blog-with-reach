export const PostCard = ({ title, cover, id, body }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <div className="post-content">
      <h1 className="truncate-one-line">{title}</h1>
      <p>{body}</p>
    </div>
  </div>
);
