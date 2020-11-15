import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface Product {
    id: number
    name: string,
    price: number;
}

export interface ProductQuantity {
    product: Product,
    quantity: number
}

const initialState: ProductQuantity[] = [
];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
    reducers: {
        addProduct: state => {
            let newProduct: ProductQuantity = { quantity: 1, product: { id: 6, name: "New thing", price: 100 }} 
            let addProduct = state.filter(p => p.product.id === newProduct.product.id)
            if (addProduct.length === 0) {
                state.push(newProduct)
            }
        },
        addProductById: (state, action: PayloadAction<Product>) => {
            const addProduct = state.filter(p => p.product.id === action.payload.id)
            if (addProduct.length === 0) {
                state.push({quantity: 1, product: action.payload})
            } else {
                state.filter(p => p.product.id === action.payload.id).map(x => x.quantity++);
            }
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            const productToRemove = state.filter(p => p.product.id === action.payload)
            if (productToRemove[0].quantity === 1) {
                return state = state.filter(p => p.product.id !== action.payload)
            } else {
                state.filter(p => p.product.id === action.payload).map(x => x.quantity--);
            }

        }
    },
  },
);

export const { addProduct, addProductById, removeProduct } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
