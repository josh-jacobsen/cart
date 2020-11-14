import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

export interface Product {
    id: number
    name: string,
    price: number;
}

const initialState: Product[] = [
];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
    reducers: {
        addProduct: state => {
            let newProduct: Product = {id: 6, name: "New thing", price: 100} 
            let addProduct = state.filter(p => p.id == newProduct.id)
            if (addProduct.length == 0) {
                state.push(newProduct)
            }
        },
        addProductById: (state, action: PayloadAction<Product>) => {
            let newProduct = action.payload
            let addProduct = state.filter(p => p.id == newProduct.id)
            if (addProduct.length == 0) {
                state.push(newProduct)
            }
        },
  },
});

export const { addProduct, addProductById } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
