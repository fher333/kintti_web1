import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';


export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const { loading, error, product } = productDetails;
    useEffect(() => {
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);

    const addToCartHandler = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`);
    };

    return (

        <div>
            {
                loading ? <LoadingBox></LoadingBox>  //si loading es true muestra una caja de loading, <LoadingBox> es un componente creado en la carpeta components
                    :
                    error ? <MessageBox variant="danger">{error}</MessageBox> // si no esta cargando pero si error es true , muestra un mesg de error, <MessageBox> es un componente creado en la carpeta components
                        :   // pero si no hay errores ni esta cargando entonces renderiza los productos




                        <div>
                            <Link to="/">Back to Girls Result</Link>
                            <div className="row top">
                                <div className="col-2">
                                    <img className="large" src={product.image} alt={product.name}></img>
                                </div>
                                <div className="col-1">
                                    <ul>
                                        <li>
                                            <h1>
                                                {product.name}
                                            </h1>
                                            <Link to={`/product/${product._id}`}>Number Phone: {product.phone}</Link>
                                        </li>
                                        <li>

                                            <Rating rating={product.rating} numReviews={product.numReviews}></Rating>


                                        </li>
                                        <li>
                                            Price for access: US$ {product.price}
                                        </li>
                                        <li>
                                            <b>Looking for:</b> <p>{product.description}</p>
                                        </li>
                                        
                                    </ul>
                                </div>
                                <div className="col-1">
                                    <div className="card card-body">
                                        <ul>
                                            <li>
                                                Agency{' '}
                                                <h2>
                                                    <Link to={`/seller/${product.seller._id}`}>
                                                        {product.seller.seller.name}
                                                    </Link>
                                                </h2>
                                                <Rating
                                                    rating={product.seller.seller.rating}
                                                    numReviews={product.seller.seller.numReviews}
                                                ></Rating>
                                            </li>
                                            <li>
                                                <div className="row">

                                                    <div>Buy access by =</div>
                                                    <div className="price">US$ {product.price}</div>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="row">

                                                    <div>Status</div>
                                                    <div >
                                                        {
                                                            product.countInStock > 0 ? (<span className="success">Number Phone Available</span>) :
                                                                (<span className="danger">Number Phone Unavailable</span>)
                                                        }
                                                    </div>
                                                </div>
                                            </li>
                                            {
                                                product.countInStock > 0 && (
                                                    <>
                                                        <li>
                                                            <div className="row">
                                                                <div>
                                                                    Weeks Access # Phone
                                                            </div>
                                                                <div>
                                                                    <select value={qty}
                                                                        onChange={(e) => setQty(e.target.value)}
                                                                    >
                                                                        {
                                                                            [...Array(product.countInStock).keys()].map(
                                                                                (x) => (
                                                                                    <option key={x + 1} value={x + 1}>
                                                                                        {x + 1}
                                                                                    </option>
                                                                                )
                                                                            )
                                                                        }
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <button
                                                                onClick={addToCartHandler}
                                                                className="primary block"
                                                            >
                                                                Add Number to Cart
                                                                </button>
                                                        </li>
                                                    </>

                                                )
                                            }


                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>





            }

        </div>





    )
}
