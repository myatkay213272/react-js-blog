import React from 'react';
import NewFeed from './NewFeed';

const Home = ({ posts, fetchError, isLoading }) => {
  return (
    <main className="container my-4">
      {isLoading && (
        <div className="d-flex justify-content-center my-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {fetchError && <p className="text-danger">{fetchError}</p>}
      {!isLoading && !fetchError && (
        posts.length ? (
          <NewFeed posts={posts} />
        ) : (
          <p className="text-muted">No posts to display.</p>
        )
      )}
    </main>
  );
};

export default Home;
