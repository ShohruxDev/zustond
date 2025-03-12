import React from 'react';
import { useStateValue } from '../context/newsadd';
import { useNavigate } from 'react-router-dom';
import "./korzinka.css";

function Korzinkapage() {
  const { basket } = useStateValue(); 
  const navigate = useNavigate();

  return (
    <>
     <div style={{
      display:'flex',
      flexDirection:'column'
     }}>
     <b className='mar'>Maxsulot Soni: {basket.length}</b>
     <b className='mar'>Ummiy narx: { basket.reduce((acc,cur)=>acc+Number(cur.price),0) } so'm </b>
     </div>
      <div style={{

      }} className="zustodmap">
      {basket.map((user, index) => (
         <div className="zusmap">
          <div key={index} className="zustondmap">
            {user.image && <img style={{
              width:'300px',
              height:'200px'
            }} src={user.image} alt="User"  />}
            <div>
              <p>{user.firstName} {user.lastName}</p>
              <p className="text-gray-500">{user.date}</p>
              <p>Narxi: {user.price} so'm</p>
              <button onClick={(e) => {
                e.stopPropagation();
                handlwishlist(user);
              }} className='like'>Like</button>
              <button style={{ marginLeft: '20px' }} onClick={(e) => {
                e.stopPropagation();
              }} className='like'>Sotib ol</button>
            </div>
          </div>
         </div>
        ))}
      </div>
    </>
  );
}

export default Korzinkapage;
