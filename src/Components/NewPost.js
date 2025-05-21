import React from 'react'

const NewPost = ({ postTitle, setPostTitle, postBody, setPostBody, handleSubmit }) => {
  return (
    <main className="container my-4">
      <h2 className="mb-4">New Post</h2>
      <form className="card p-4 shadow-sm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="postTitle" className="form-label">Title</label>
          <input
            id="postTitle"
            type="text"
            className="form-control"
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="postBody" className="form-label">Post:</label>
          <textarea
            id="postBody"
            className="form-control"
            required
            rows="5"
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </main>
  )
}

export default NewPost
