import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState, store } from '../../app/store';
import { ProductQuantity, Product } from '../cart/cartSlice';

export interface ProductState {
    loading: boolean,
    products: ProductQuantity[]
}

const initialState : ProductState = {
    loading: true,
    products : []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
    reducers: {
        fetchProducts: (state, action: PayloadAction<ProductQuantity[]>) => {
            state.products = action.payload;
            state.loading = false;
    },
    },
  },
);

export const { fetchProducts } = productsSlice.actions;

export default productsSlice.reducer;

export const selectProducts = (state: RootState) => state.products;


// Implemented this async call as the instructions asked to "3. Handle async call in redux (redux-thunk or Redux-Saga)"
export const fetchProductsAsync = () : AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(fetchProducts(productsFetched));
  }, 2000);
};

const productsFetched: ProductQuantity[] = [
    { quantity: 1, product: {id: 1, name: "Sledgehammer", price: 125.75}},
    { quantity: 1, product: {id: 2, name: "Axe", price: 190.50}},
    { quantity: 1, product: {id: 3, name: "Sandsaw", price: 562.13}},
    { quantity: 1, product: {id: 4, name: "Chisel", price: 12.90}},
    { quantity: 1, product: {id: 5, name: "Hacksaw", price: 18.45}},
]


