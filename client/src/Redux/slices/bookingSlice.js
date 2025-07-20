import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createBooking } from '../api';

export const bookAppointment = createAsyncThunk(
  'booking/bookAppointment',
  async (bookingData, { rejectWithValue }) => {
    try {
      const response = await createBooking(bookingData);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || 'Booking failed');
    }
  }
);

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    loading: false,
    error: null,
    success: false,
    bookingDetails: null,
  },
  reducers: {
    resetBookingState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
      state.bookingDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(bookAppointment.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(bookAppointment.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.bookingDetails = action.payload;
      })
      .addCase(bookAppointment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetBookingState } = bookingSlice.actions;
export default bookingSlice.reducer;