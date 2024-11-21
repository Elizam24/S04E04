import React, { useState, useEffect } from 'react';

const useForm = ({ onSubmit, user }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: '',
    
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    } else {
      setFormData({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: '',
        
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
      <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" required />
      <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" required />
      <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} required />
      <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL (optional)" />
          <button type="submit">Submit</button>
        </form>
      );
    };
    
    export default useForm;