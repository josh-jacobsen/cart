import React, { useEffect } from 'react';
import { addProductById } from '../cart/cartSlice';
import { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsAsync } from './productsSlice';

export const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(fetchProductsAsync())
    }, [])

    return (
        <div>
            {products.loading && 
                <p className="text-center">Loading data async...</p>
            }
            {!products.loading &&
                <div>Available products:
             {products.products.map(p => 
                 <div key={p.product.id}>Name: {p.product.name} Price: {(Math.round(p.product.price * 100) / 100).toFixed(2)}
                     <button onClick={() => dispatch(addProductById({id: p.product.id, name: p.product.name, price: p.product.price}))}
                     
                        >+
                     </button>
                 </div>


             )}

            </div>
            }
            
            </div>
    )
}