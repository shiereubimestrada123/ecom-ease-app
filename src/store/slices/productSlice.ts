import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '@types';

type ProductState = {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
};

const initialState: ProductState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await fetch('https://fakestoreapi.com/products');

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const productsData = await response.json();

      return productsData;
    } catch (error) {
      throw error;
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default productSlice.reducer;
