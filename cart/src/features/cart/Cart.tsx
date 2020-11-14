import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppThunk, RootState } from '../../app/store';
import styles from '../counter/Counter.module.css';
import {addProduct, removeProduct} from './cartSlice'


export function Cart() {
    const products = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    return (
        <div>
            <div>This is the cart component</div>
            {products.map(p =>
                <div key={p.id}>Name: {p.name} Price: {p.price}
                <button onClick={() => dispatch(removeProduct(p.id))}>
                 -        
                </button>
            
                </div>
            )}
        </div>
    )
}