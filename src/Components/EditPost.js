import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EditPost = ({
  posts,
  handleEdit,
  editBody,
  editTitle,
  setEditTitle,
  setEditBody
}) => {
  const { id } = useParams();
  const post = posts.find(post => post.id.toString() === id);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  return (
    <main className="container mt-5">
      {editTitle && (
        <form onSubmit={(e) => {
          e.preventDefault();
          handleEdit(post.id);
        }}>
          <h2 className="mb-4">Edit Post</h2>
          
          <div className="mb-3">
            <label htmlFor="editTitle" className="form-label">Title</label>
            <input
              id="editTitle"
              className="form-control"
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="editBody" className="form-label">Body</label>
            <textarea
              id="editBody"
              className="form-control"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
              rows="6"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary"
            onClick={()=>handleEdit(post.id)}
            >Save Changes</button>
        </form>
      )}
      {!editTitle && (
        <p className="text-danger">Post Not Found</p>
      )}
    </main>
  );
};

export default EditPost;
