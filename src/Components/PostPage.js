import React from 'react';
import { Link, useParams } from 'react-router-dom';

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams();
  const post = posts.find(post => post.id.toString() === id);

  return (
    <main className="container my-4">
      <article className="card p-4 shadow-sm">
        {post ? (
          <>
            <h2 className="card-title">{post.title}</h2>
            <p className="text-muted">{post.datetime}</p>
            <p className="card-text">{post.body}</p>

            <div className="d-flex gap-2">
              <Link to={`/edit/${post.id}`} className="btn btn-secondary">
                Edit Post
              </Link>

              <button
                className="btn btn-danger"
                onClick={() => handleDelete(post.id)}
              >
                Delete Post
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-danger">Post Not Found</h2>
            <p className="mb-2">Well, that's disappointing.</p>
            <Link to="/" className="btn btn-primary">
              Visit Our Homepage
            </Link>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
