import { render, screen } from '@testing-library/react';
import { TickerInfo } from './TickerInfo';

describe('TickerInfo test', () => {
  test("check rising trend", () => {

    render(
      <TickerInfo
        price="120"
        change="20"
        change_percent="20"
        dividend="10"
      />,
    );

    const change = screen.getByTestId('ticker-change');
    const changePercent = screen.getByTestId('ticker-change-percent');

    expect(change.classList.contains('rising')).toBe(true);
    expect(changePercent.classList.contains('rising')).toBe(true);
  });
  
  test("check falling trend", () => {
    render(
      <TickerInfo
        price="80"
        change="-20"
        change_percent="-20"
        dividend="10"
      />,
    );

    const change = screen.getByTestId('ticker-change');
    const changePercent = screen.getByTestId('ticker-change-percent');

    expect(change.classList.contains('falling')).toBe(true);
    expect(changePercent.classList.contains('falling')).toBe(true);
  });
});