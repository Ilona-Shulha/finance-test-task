import { TickerItem } from '../TickerItem/TickerItem';

import './Tickers.scss';

export function Tickers({ tickers }) {
  return (
    <ul className="Tickers" data-testid="tickers">
      {tickers.map((ticker) => (
        <li key={ticker.ticker.ind}>
          <TickerItem tickerInfo={ticker} />
        </li>
      ))}
    </ul>
  );
}
