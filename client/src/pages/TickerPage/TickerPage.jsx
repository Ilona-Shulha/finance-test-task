import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

import { TickerInfo } from '../../components/TickerInfo/TickerInfo';
import { selectAllTickers } from '../../store/selectors/selectors';

import './TickerPage.scss';

export const TickerPage = () => {
  const { ind } = useParams();
  const [ticker, setTicker] = useState(null);
  const [formattedTradeDate, setFormattedTradeDate] = useState(null);
  const tickers = useSelector(selectAllTickers);

  useEffect(() => {
    if (tickers.length > 0) {
      const element = tickers.find(el => el.ticker.ind.toLowerCase() === ind.toLowerCase());
      if (element) {
        setTicker(element);
        const originalTradeDate = new Date(element.last_trade_time);
        setFormattedTradeDate(format(originalTradeDate, "MMM dd, yyyy, hh:mm:ss a 'GMT'"));
      }
    }
  }, [tickers, ind]);


  return (
    <main className="TickerPage" data-testid="ticker-page">
      {(tickers.length > 0 && !ticker) && <>
        <p className="TickerPage__error">
          Please, check index of the ticker
        </p>
        <Link to="/" className="TickerPage__error error-link">
          Return to Home page
        </Link>
      </>}

      {!!ticker && <>
        <h2 className="TickerPage__title">{`${ticker.ticker.title}`}</h2>
        <div className="TickerPage__shortInfo">
          <TickerInfo
            price={ticker.price}
            change={ticker.change}
            change_percent={ticker.change_percent}
            dividend={ticker.dividend}
          />
        </div>
        <ul className="TickerPage__info">
          <li className="TickerPage__info-point">
            <span>Last trade time</span>
            <span>{formattedTradeDate}</span>
          </li>
          <li className="TickerPage__info-point">
            <span>Main trading floor</span>
            <span>{ticker.exchange}</span>
          </li>
          <li className="TickerPage__info-point">
            <span>Annual dividend yield</span>
            <span>{(ticker.dividend / 400 * ticker.price).toFixed(2) + '$'}</span>
          </li>
          <li className="TickerPage__info-point">
            <span>INDEX</span>
            <span>{ticker.ticker.ind}</span>
          </li>
        </ul>
      </>}
    </main>
  );
};