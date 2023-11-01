import { render, screen } from '@testing-library/react';

import { Tickers } from './Tickers';
import { MemoryRouter } from "react-router-dom";

const data = [
  {
    ticker: {
      title: 'Apple',
      ind: 'AAPL',
    },
    exchange: 'NASDAQ',
    price: '138.73',
    change: '-23.35',
    change_percent: '-14.41',
    dividend: '0.31',
    'yield': '1.65',
    last_trade_time: '2023-11-01T10:36:08.000Z',
  },
  {
    ticker: {
      title: 'Alphabet',
      ind: 'GOOGL',
    },
    exchange: 'NASDAQ',
    price: '167.55',
    change: '-49.44',
    change_percent: '-22.78',
    dividend: '0.37',
    'yield': '1.52',
    last_trade_time: '2023-11-01T10:36:08.000Z',
  }]

describe('Tickers test', () => {
  test('Tickers render on main page', () => {
    render(
      <MemoryRouter initialEntries={['/'] }>
        <Tickers tickers={data} />
      </MemoryRouter>,
    );
    expect(screen.getByTestId('tickers')).toBeInTheDocument();
  });
  test('Render each element of arr', () => {
    render(
      <MemoryRouter initialEntries={['/'] }>
        <Tickers tickers={data} />
      </MemoryRouter>,
    );

    const links= screen.getAllByTestId('ticker-item');

    expect(links.length).toBe(2);
  });
});