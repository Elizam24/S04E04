// src/useApi.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://users-crud-api-81io.onrender.com/api/v1/users';

const useApi = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(API_URL);
      setData(response.data);
    } catch (err) {
      setError(err);
    }
  };

  const createUser  = async (user) => {
    try {
      await axios.post(API_URL, user);
      fetchUsers();
    } catch (err) {
      setError(err);
    }
  };

  const updateUser  = async (id, user) => {
    try {
      await axios.put(`${API_URL}/${id}`, user);
      fetchUsers();
    } catch (err) {
      setError(err);
    }
  };

  const deleteUser  = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchUsers();
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { data, error, createUser , updateUser , deleteUser  };
};

export default useApi;