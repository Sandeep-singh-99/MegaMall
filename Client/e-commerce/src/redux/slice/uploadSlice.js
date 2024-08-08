import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const uploadProduct = createAsyncThunk(
  "product/upload-product",
  async (product, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/product/upload-product",
        product
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getProduct = createAsyncThunk("product/get-product", async (_,{ rejectWithValue }) => {
  try {
    const response = await axios.get("http://localhost:5000/api/product/get-product");

    
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
})

const uploadSlice = createSlice({
  name: "upload",
  initialState: {
    data: null,
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    // upload product
    builder.addCase(uploadProduct.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });

    builder.addCase(uploadProduct.pending, (state, action) => {
        state.isLoading = true
    })

    builder.addCase(uploadProduct.rejected, (state, action) => {
        state.isError = true
    })

    // get product
    builder.addCase(getProduct.fulfilled, (state, action) => {
      
      state.data = action.payload.data
      state.isLoading = false;
    });

    builder.addCase(getProduct.pending, (state, action) => {
      state.isLoading = true
    })

    builder.addCase(getProduct.rejected, (state, action) => {
      state.isError = true
    })
  },
});

export default uploadSlice.reducer;
