import React, { useState } from "react";
import useStore from "../store";
import "./asosiypage.css";
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../context/newsadd';

function AsosiyPage() {
  const { users, addUser, deleteUser, updateUser } = useStore();
  const navigate = useNavigate();
  const { setwishlist, wishlist, basket, handleAddToBasket } = useStateValue(); 

  const handlwishlist = (product) => {
    const issomewishlist = wishlist.some((item) => item.id === product.id);
    if (issomewishlist) {
      setwishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setwishlist([...wishlist, product]);
    }
  };
  const [editIndex, setEditIndex] = useState(null);

 
  const [form, setForm] = useState({ firstName: "", lastName: "", date: "", price: "", image: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (form.firstName && form.lastName && form.date && form.image) {
      if (editIndex !== null) {
        updateUser(editIndex, form);
        setEditIndex(null);
      } else {
        addUser(form);
      }
      addUser(form);
      setForm({ firstName: "", lastName: "", date: "", image: null });
    }
  };
  const handleEdit = (index) => {
    const userToEdit = users[index];
    setForm(userToEdit);
    setEditIndex(index);
  };


  return (
     
    <div className="maxsulot">
     <div style={{
      margin:'45px 50px',
      display:'flex',
      gap:'10px'
     }}>
     <input
        type="text"
        name="firstName"
        placeholder="Ism"
        value={form.firstName}
        onChange={handleChange}
        className="input"
      />
      <input
        type="text"
        name="lastName"
        placeholder="Familiya"
        value={form.lastName}
        onChange={handleChange}
        className="input"
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="input"
      />
       <input
          type="text"
          name="price"
          placeholder="Narxi"
          value={form.price}
          onChange={(e) => {
            const value = e.target.value.replace(/[^0-9]/g, ""); 
            setForm((prev) => ({ ...prev, price: value }));
          }}
          className="input"
        />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="input"
      />
      <button
        onClick={handleSubmit}
        className="btn"
      >
        Qo‘shish
      </button>
     </div>
      
      <div className="zustodmap">
       <div className="zusmap" style={{
       }}>
       {users.map((user, index) => (
          <div key={index} className="zustondmap">
            {user.image && <img src={user.image} alt="User" className="asosiyimage" />}
            <div>
              <p>{user.firstName} {user.lastName}</p>
              <p className="text-gray-500">{user.date}</p>
              <p>Narxi: {user.price} so'm</p>
           
              <button onClick={() => deleteUser(index)} style={{
                marginLeft:'20px'
              }} className="like">O'chirish</button>
               <button onClick={() => handleEdit(index)} style={{
                marginLeft:'20px'
              }} className="like">O'zgartirish</button>
            </div>
          </div>
        ))}
       </div>
      </div>
    </div>
  );
}

export default AsosiyPage;