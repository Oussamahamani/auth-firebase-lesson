import React, { useState,useEffect } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit =async (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };


  return (
    <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
      <label>
        Email:
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} required />
      </label>
      <label>
        Password:
        <input type="text" value={password} onChange={e => setPassword(e.target.value)} required />
      </label>
      <input type="submit" value="Sign up" />
    </form>
  );
}

export default Signup;