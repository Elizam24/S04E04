import React, { useState, useEffect } from 'react';
import './UseForm.css'; // Asegúrate de que la ruta sea correcta

const UseForm = ({ onSubmit, user }) => {
  const [formData, setFormData] = useState({
    correo: '',
    contrasena: '',
    Primer_Nombre: '',
    Segundo_Nombre: '',
    Cumpleanos: '',
    
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    } else {
      setFormData({
        Correo: '',
        contrasena: '',
        Primer_Nombre: '',
        Segundo_Nombre: '',
        Cumpleanos: '',
        
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
    
    export default UseForm;