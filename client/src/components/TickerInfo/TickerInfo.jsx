import classNames from 'classnames';

import './TickerInfo.scss';

export const TickerInfo = ({ price, change, change_percent, dividend }) => {
  return (
    <div className="TickerInfo">
      <p className="TickerInfo__price">
        {`${price}$`}
      </p>
      <p
        data-testid="ticker-change"
        className={classNames(
          'TickerInfo__change',
          { 'rising': change > 0 },
          { 'falling': change < 0 },
        )}
      >
        {`${change}$`}
      </p>
      <p
        data-testid="ticker-change-percent"
        className={classNames(
          'TickerInfo__change-percent',
          { 'rising': change_percent > 0 },
          { 'falling': change_percent < 0 },
        )}
      >
        {`${change_percent}%`}
      </p>
      <p className="TickerInfo__dividend">
        {`${dividend}%`}
      </p>
    </div>
  );
};