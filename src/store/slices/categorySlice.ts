import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

type CategoryState = {
  categories: string[];
  isLoading: boolean;
  isError: boolean;
};

const initialState: CategoryState = {
  categories: [],
  isLoading: false,
  isError: false,
};

export const fetchCategories = createAsyncThunk(
  'category/fetchCategories',
  async () => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await fetch(
        'https://fakestoreapi.com/products/categories'
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const categoriesData = await response.json();

      return categoriesData;
    } catch (error) {
      throw error;
    }
  }
);

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        fetchCategories.fulfilled,
        (state, { payload }: PayloadAction<string[]>) => {
          state.isLoading = false;
          state.isError = false;
          state.categories = payload;
        }
      )
      .addCase(fetchCategories.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default categorySlice.reducer;
