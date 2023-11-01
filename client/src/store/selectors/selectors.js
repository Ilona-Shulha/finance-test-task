import { createSelector } from '@reduxjs/toolkit';

export const selectAllTickers = state => state.tickers.tickers;
export const selectActiveFilter = state => state.filters;
export const selectSocketStatus = state => state.socket.connectionStatus;

export const selectTickersByFilter = createSelector(
  [selectAllTickers, selectActiveFilter],
  (allTickers, activeFilter) => {
    if (activeFilter === 'all') return allTickers;

    if (activeFilter === 'raised') {
      return allTickers.filter(ticker => ticker.change > 0);
    }

    return allTickers.filter(ticker => ticker.change < 0);
  },
);
