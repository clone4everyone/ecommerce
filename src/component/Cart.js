import React from 'react';
import { useGlobalContext } from './Context';
import { Link } from 'react-router-dom';
const Cart = () => {
  const {cart,img,change,remove,total_price,quantity}=useGlobalContext();
  return (
    <>
   <div className='cart-header'>
<h1>Add to cart</h1>
   </div>
   {
cart.length===0?<div className='container empty'>
cart is empty
<Link to="/"><button className='remove'>Add product</button></Link>

</div>:<div className="main-body">
    <div className="left">
        <div className="gallery">
            <a href={img} data-lightbox="models" data-title="Caption1">
                <img src={img} className='main-img'/>
            </a>
            
        </div>
        <div className="product-logo">
            <img src='image-product-1-thumbnail.jpg' onClick={()=>change("image-product-1.jpg")} className='img-logo'></img>
            <img src='image-product-2-thumbnail.jpg' onClick={()=>change("image-product-2.jpg")} className='img-logo' ></img>
            <img src='image-product-3-thumbnail.jpg' onClick={()=>change("image-product-3.jpg")} className='img-logo'></img>
            <img src='image-product-4-thumbnail.jpg' onClick={()=>change("image-product-4.jpg")} className='img-logo'></img>
        </div>
    </div>
    <div className="right">
        <p className='sneaker-company'>SNEAKER COMPANY</p>
        <h3> Fall Limited Edition Sneakers</h3>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole,they'll withstand everything the weather can offer.</p>
        <h3>$125.00</h3>
         <p className='total-item'>total item :{quantity}</p>
      <h3>Total price: ${total_price}</h3>
        <div className="submit-section">
            <button className='buy'>BUY</button><button onClick={()=>remove()} className='remove'>Remove from cart</button>
        </div>
       
    </div>
</div>
   }
    </>
  );
}

export default Cart;
