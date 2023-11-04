import React from 'react';
import { useGlobalContext } from './Context';
import { Link } from 'react-router-dom';
const Home = () => {
    const {img,change,quantity,increase,decrease,addcart,warning,cart,price}=useGlobalContext();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiarynav1">
  <div className="container-fluid nav">
    <a className="navbar-brand" href="#">Sneakers</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">collections</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Men</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Women</a>
        </li><li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
      </ul>
      <div className='end'>
        <Link to="/cart">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero" /></svg></Link>
        <img className='avatar' src='image-avatar.png'/>
      </div>
    </div>
  </div>
</nav>

<div className="main-body">

  <div className='main-cart'><Link to="/cart">
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero" /></svg></Link>Cart</div>
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
        <h3>${price}</h3>
        <div className="submit-section">
            <div className="quantity">
              {quantity===1?<button disabled className='decreas'>-</button >:<button onClick={()=>decrease()} className='decrease'>-</button>}
                
                <p>{quantity}</p>

                <button onClick={()=>increase()} className='decrease'>+</button>
            </div>
            <button className='btn btn-dark add-to-cart' onClick={()=>addcart()}>Add to cart</button>
        </div>
        {
          warning===true?cart.length!=0?<p className='warning'>This item is  added</p>:'':''
        }
    </div>
</div>
    </>
  );
}

export default Home;
