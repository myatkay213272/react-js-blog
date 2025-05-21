import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <article className="card my-3 p-3">
      <Link to={`/post/${post.id}`} className="text-decoration-none">
        <h2 className="card-title">{post.title}</h2>
        <p className="text-muted">{post.datetime}</p>
      </Link>
      <p className="card-text">
        {post.body.length <= 29 ? post.body : `${post.body.slice(0, 29)}...`}
      </p>
    </article>
  );
};

export default Post;
