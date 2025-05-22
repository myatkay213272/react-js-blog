import React from 'react';

const About = () => {
  return (
    <div className="container m-5 p-5">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="card-title text-primary">About This App</h2>
          <p className="card-text mt-3">
            This blog application is built using <strong>React</strong> and styled with <strong>Bootstrap</strong>.
            It allows users to create, read, update, and delete blog posts.
            The goal of this project is to help you practice React fundamentals and state management.
          </p>
          <p className="card-text">
            You can also learn how routing works with <strong>React Router</strong> and how to manage data using simple state.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
