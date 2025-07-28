import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createCheckoutSession } from '../api';

export const initiatePayment = createAsyncThunk(
  'payment/initiatePayment',
  async (items, { rejectWithValue }) => {
    try {
      const data = await createCheckoutSession(items);
      return data;
    } catch (err) {
      return rejectWithValue(err.response.data || err.message);
    }
  }
);

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    loading: false,
    error: null,
    sessionUrl: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initiatePayment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(initiatePayment.fulfilled, (state, action) => {
        state.loading = false;
        state.sessionUrl = action.payload.url;
      })
      .addCase(initiatePayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default paymentSlice.reducer;
