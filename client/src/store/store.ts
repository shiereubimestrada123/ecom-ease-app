import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import categorySlice from './slices/categorySlice';
import productSlice from './slices/productSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    category: categorySlice,
    product: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
