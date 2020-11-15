import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import productsSlice from '../features/products/productsSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
