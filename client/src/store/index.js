import { configureStore } from '@reduxjs/toolkit';

import tickerReducer from './slices/tickerSlice';
import socketReducer from './slices/socketSlice';
import filterReducer from './slices/filterSlice';

export default configureStore({
  reducer: {
    tickers: tickerReducer,
    socket: socketReducer,
    filters: filterReducer,
  },
});