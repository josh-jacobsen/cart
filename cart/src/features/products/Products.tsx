import React, { useState, useEffect } from 'react';
import { Product, addProductById, removeProduct } from '../cart/cartSlice';
import { AppThunk, RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductsAsync } from './productsSlice';

export const Products = () => {
    const dispatch = useDispatch();
    const hhh = useSelector((state: RootState) => state.products);

    const [products, setProducts] = useState<Product[]>([
        { id: 1, name: "Sledgehammer", price: 125.75 },
        { id: 2, name: "Axe", price: 190.50 },
        { id: 3, name: "Sandsaw", price: 562.13 },
        { id: 4, name: "Chisel", price: 12.90 },
        { id: 5, name: "Hacksaw", price: 18.45 },
    ]);

    useEffect(() => {
        dispatch(fetchProductsAsync())
    }, [])

    return (
        <div>
            {hhh.loading && 
                <p className="text-center">Loading data async...</p>
            }
            {!hhh.loading &&
            <div>This is the Products component
             {hhh.products.map(p => 
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