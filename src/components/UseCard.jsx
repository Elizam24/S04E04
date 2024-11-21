// src/components/UserCard.js
import React from 'react';
import { TfiGift } from "react-icons/tfi";
import { BsPencilSquare } from "react-icons/bs";
import { FaTrashAlt } from "react-icons/fa";
const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h3 className='card_name'>{user?.first_name} {user?.last_name}</h3>
      <div className='card_info'>
       </div> 
       <div>
      <p>Correo: {user.email}</p>
      </div>
     <div> 
      <p>Cumpleanos: <TfiGift /> {user?.birthday} </p>
      </div>
      <div className='card_btns'>
      <button><BsPencilSquare /> </button>
      <button><FaTrashAlt /></button>
    </div>
   </div>
  );
};

export default UserCard;
