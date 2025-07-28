import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './slices/bookingSlice';
import paymentReducer from './slices/paymentSlice';

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
    payment: paymentReducer,
  },
});