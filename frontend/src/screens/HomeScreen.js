import React, { useEffect } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';


export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => { // useEffect se monta al abrir el componente
   
      dispatch(listProducts({}));
    }, [dispatch]);

  return (
    <div>
      {loading ? <LoadingBox></LoadingBox>  //si loading es true muestra una caja de loading, <LoadingBox> es un componente creado en la carpeta components
        :
        error ? <MessageBox variant="danger">{error}</MessageBox> // si no esta cargando pero si error es true , muestra un mesg de error, <MessageBox> es un componente creado en la carpeta components
          :   // pero si no hay errores ni esta cargando entonces renderiza los productos
          <div className="row center">
            {
              products.map(product => (
                <Product key={product._id} product={product}></Product>

              ))
            }

          </div>
      }

    </div>
  );
}
