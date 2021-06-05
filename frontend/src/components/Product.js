import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
  const { product } = props;
  console.log(props);
  return (

    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>

        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}>
        </Rating>

        <div className="row">
          <div className="price">US$ {product.price}</div>
          <div>
            <Link to={`/seller/${product.seller._id}`}>
            {product.seller.seller.name}
            </Link>
            
          </div>
          
         
        </div>
        
        <Link to={`/product/${product._id}`}>Number Phone: {product.phone}</Link>

        
      </div>
      <button
        className="secundary media"
      >
        Chat with her
      </button>
    </div>
  );
  
}