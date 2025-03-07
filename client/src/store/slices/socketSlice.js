import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { socketClient } from '../../index';

const initialState = {
  connectionStatus: '',
};

export const connectToSocket = createAsyncThunk('connectToSocket', async function () {
  try {
    await socketClient.connect();
    await socketClient.emit('start');
  } catch (e) {
    console.error('Error when connecting to the socket server:', e);
  }
  
});

export const disconnectFromSocket = createAsyncThunk('disconnectFromSocket', async function () {
  return await socketClient.disconnect();
});

const socketSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(connectToSocket.pending, (state) => {
      state.connectionStatus = 'connecting';
    });
    builder.addCase(connectToSocket.fulfilled, (state) => {
      state.connectionStatus = 'connected';
    });
    builder.addCase(connectToSocket.rejected, (state) => {
      state.connectionStatus = 'connection failed';
    });
    builder.addCase(disconnectFromSocket.pending, (state) => {
      state.connectionStatus = 'disconnecting';
    });
    builder.addCase(disconnectFromSocket.fulfilled, (state) => {
      state.connectionStatus = 'disconnected';
    });
    builder.addCase(disconnectFromSocket.rejected, (state) => {
      state.connectionStatus = 'disconnection failed';
    });
  },
});

export default socketSlice.reducer;