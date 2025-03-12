import React from 'react'
import NewsProvider, { useStateValue } from '../context/newsadd'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "./addpage.css"
function AddPage() {
  const {wishlist, setwishlist} = useStateValue();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); 
  const handlwishlist = (product) => {
    const issomewishlist = wishlist.some((item) => item.id === product.id);
    if (issomewishlist) {
      setwishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setwishlist([...wishlist, product]);
    }
  };
  return (
    <>
    <p>{wishlist.length}</p>
    <div className="zusmap">
    {wishlist.map((user, index) => (
        <div key={index} className="zustondmap">
          {user.image && <img src={user.image} alt="User" className="asosiyimagee" />}
          <div>
            <p>{user.firstName} {user.lastName}</p>
            <p className="text-gray-500">{user.date}</p>
            <p>Narxi: {user.price} so'm</p>
            <button onClick={(e) => {
              setIsModalOpen((prev) => !prev)
              handlwishlist(user)
            }} className='like'>Like</button>
             {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <p>{t("header.lit2")}</p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="close-btn"
              >
                <p>{t("header.lit4")}</p>
              </button>
            </div>
          </div>
        )}
              <button style={{
              marginLeft:'20px'
             }} onClick={(e) => {
              e.stopPropagation();
            }} className='like'>sotibol</button>
          </div>
        </div>
      ))}
    </div>
  
    </>
  )
}

export default AddPage