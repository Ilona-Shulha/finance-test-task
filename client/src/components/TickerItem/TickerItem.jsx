import { Link } from 'react-router-dom';

import { TickerInfo } from '../TickerInfo/TickerInfo';

import './TickerItem.scss';

export function TickerItem({ tickerInfo }) {
  const {
    ticker,
    exchange,
    price,
    change,
    change_percent,
    dividend,
  } = tickerInfo;

  return (
    <Link
      data-testid="ticker-item"
      to={`ticker/${ticker.ind}`}
      className="TickerItem"
    >
      <p className="TickerItem__ind">
        {ticker.ind}
      </p>
      <p className="TickerItem__exchange">
        {exchange}
      </p>
      <TickerInfo
        price={price}
        change={change}
        change_percent={change_percent}
        dividend={dividend}
      />
    </Link>
  );
};
