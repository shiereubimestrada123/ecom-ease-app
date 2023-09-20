import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { RootState } from '@store';

type UserState = {
  token: string;
  isLoading: boolean;
  isError: boolean;
};

const initialState: UserState = {
  token: localStorage.getItem('token') || '',
  isLoading: false,
  isError: false,
};

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (form: { username: string; password: string }) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const userData = await response.json();

      localStorage.setItem('token', userData.token);

      return userData;
    } catch (error) {
      throw error;
    }
  }
);

export const logoutUser = createAsyncThunk('user/logoutUser', async () => {
  localStorage.removeItem('token');
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // login
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })

      // logout
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        // Clear the token and reset other relevant states
        state.token = '';
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(logoutUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

// export const getUser = (state: RootState) => state.user;

export default userSlice.reducer;
