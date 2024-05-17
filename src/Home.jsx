import React from 'react';

function Home({user}) {
  return (
    <div>
      <h1>Welcome to the Home Page {user&&user.email}</h1>
      <p>This is a basic home page created in React.</p>
    </div>
  );
}

export default Home;