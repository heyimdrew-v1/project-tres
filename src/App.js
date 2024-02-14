import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === 'JSmith23') {
      setBackgroundColor('green');
      setMessage(`Welcome, ${username}`);
    } else {
      setBackgroundColor('red');
      setMessage('User not found');
    }
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div style={{ backgroundColor, minHeight: '100vh', padding: '20px' }}>
      <h1>Please Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default App;
