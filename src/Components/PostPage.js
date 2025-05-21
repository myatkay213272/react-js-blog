import React from 'react'
import { Link, useParams } from 'react-router-dom'

const PostPage = ({ posts, handleDelete }) => {
  const { id } = useParams()
  const post = posts.find(post => (post.id).toString() === id)

  return (
    <main className="container my-4">
      <article className="card p-4">
        {
          post ? (
            <>
              <h2 className="card-title">{post.title}</h2>
              <p className="text-muted">{post.datetime}</p>
              <p className="card-text">{post.body}</p>

              <button
                className="btn btn-danger mt-3"
                onClick={() => handleDelete(post.id)}
              >
                Delete Post
              </button>
            </>
          ) : (
            <>
              <h2 className="text-danger">Post Not Found</h2>
              <p className="mb-2">Well, that's disappointing.</p>
              <p>
                <Link className="btn btn-primary" to="/">Visit Our Homepage</Link>
              </p>
            </>
          )
        }
      </article>
    </main>
  )
}

export default PostPage
