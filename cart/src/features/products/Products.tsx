import React, { useState } from 'react';
import { Product, addProductById } from '../cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

export function Products() {
    const dispatch = useDispatch();

    const [products, setProducts] = useState<Product[]>([
        { id: 1, name: "Sledgehammer", price: 125.75 },
        { id: 2, name: "Axe", price: 190.50 },
        { id: 3, name: "Sandsaw", price: 562.13 },
        { id: 4, name: "Chisel", price: 12.90 },
        { id: 5, name: "Hacksaw", price: 18.45 },
    ]);

    return (
        <div>
            <div>This is the Products component
             {products.map(p => 
                 <div key={p.id}>Name: {p.name} Price: {(Math.round(p.price * 100) / 100).toFixed(2)}
                     <button onClick={() => dispatch(addProductById({id: p.id, name: p.name, price: p.price}))}
                     
                        >+
                     </button>
                 </div>


             )}

            </div></div>
    )
}