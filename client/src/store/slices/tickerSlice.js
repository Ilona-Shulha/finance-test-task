import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { socketClient } from '../../index';

const initialState = {
  dataStatus: '',
  tickers: [],
};

export const fetchTickers = createAsyncThunk(
  'fetchTickers',
  async function (_, { getState, dispatch }) {
    return await socketClient.on('ticker', (receivedData) => {
      return dispatch(saveReceivedTickers(receivedData))
    });
  },
);

const tickerSlice = createSlice({
  name: 'tickers',
  initialState,
  reducers: {
    saveReceivedTickers: (state, data) => {
      state.tickers = data.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTickers.pending, (state) => {
      state.dataStatus = 'connecting';
    });
    builder.addCase(fetchTickers.fulfilled, (state) => {
      state.dataStatus = 'connected';
    });
    builder.addCase(fetchTickers.rejected, (state) => {
      state.dataStatus = 'connection failed';
    });
  },
});

export const { saveReceivedTickers, savePreferedTickers } = tickerSlice.actions;
export default tickerSlice.reducer;
