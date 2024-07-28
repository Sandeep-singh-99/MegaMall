import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authURL = "http://localhost:5000/api/auth";

// Helper functions to manage local storage
const saveUserToLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user');
};

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

// Thunks for registration and login
export const Registration = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(`${authURL}/register`, user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const LoginFeature = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(`${authURL}/login`, user);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    isError: false,
    isLogged: !!getUserFromLocalStorage(), // Initialize with local storage data
    data: getUserFromLocalStorage(), // Initialize with local storage data
    errorMessage: null,
  },
  reducers: {
    logout: (state) => {
      state.isLogged = false;
      state.data = null;
      removeUserFromLocalStorage(); // Remove user from local storage
    },
    setCredentials: (state, action) => {
      state.isLogged = true;
      state.data = action.payload;
      saveUserToLocalStorage(action.payload); // Save user to local storage
    },
  },
  extraReducers: (builder) => {
    // Registration cases
    builder
      .addCase(Registration.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(Registration.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLogged = true;
        state.data = action.payload.user;
        state.errorMessage = null;
        saveUserToLocalStorage(action.payload.user); // Save user to local storage
      })
      .addCase(Registration.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload.message || "Registration failed";
      });

    // Login cases
    builder
      .addCase(LoginFeature.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(LoginFeature.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLogged = true;
        state.data = action.payload.user;
        state.errorMessage = null;
        saveUserToLocalStorage(action.payload.user); // Save user to local storage
      })
      .addCase(LoginFeature.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.errorMessage = action.payload.message || "Login failed";
      });
  },
});

export const { logout, setCredentials } = authSlice.actions;
export default authSlice.reducer;
