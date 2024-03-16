import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [message,setMessage]=useState('');
  const [error,setError]=useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', formData);
      if (response.data.success) {
        console.log('Registration successful:', response.data);
        
        setMessage(response.data.message)
        setError('')
       
      } else {
        console.log('Registration failed:', response.data.message);
        setError(response.data.message);
        setMessage('')
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Show error message to the user
    }
  };
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
          <p>{message}</p>
          <p>{error}</p>
    </div>
  );
}

export default App;
