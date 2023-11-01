import { useSelector} from 'react-redux';
import { useState } from 'react';

import { Tickers } from "../../components/Tickers/Tickers";
import { Loader } from '../../components/Loader/Loader';
import { Input } from '../../components/Input/Input';
import { Filters } from '../../components/Filters/Filters';
import { selectTickersByFilter } from '../../store/selectors/selectors';

import './MainPage.scss';

export const MainPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const tickers = useSelector(selectTickersByFilter);

  const filterByNameInd = (arr, search) => {
    if (!search.trim()) {
      return arr;
    };

    const searchPart = search.toLowerCase().trim();

    const filterTickers = (ticker, search) => {
      const checkTitle = ticker.title.toLowerCase().includes(search);
      const checkInd = ticker.ind.toLowerCase().includes(search);

      return checkTitle || checkInd;
    };

    return arr.filter(el => filterTickers(el.ticker, searchPart));
  };

  return (
    <main className="MainPage" data-testid="main-page">
      <Filters />
      <Input
        data-testid={'input-component'}
        changeHeandler={setSearchValue}
        inputValue={searchValue}
        placeholder="Search..."
      />
      {tickers.length === 0 && <div className="MainPage__loader">
        <Loader />
      </div>
      }

      {tickers.length > 0 && <Tickers tickers={filterByNameInd(tickers, searchValue)}/>}
    </main>
  );
};