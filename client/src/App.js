import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AppRouter from './router/AppRouter';
import { connectToSocket, disconnectFromSocket } from './store/slices/socketSlice';
import { selectSocketStatus } from './store/selectors/selectors';
import { fetchTickers } from './store/slices/tickerSlice';

import './App.scss';

function App() {
  const connectionStatus = useSelector(selectSocketStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(connectToSocket());

    return () => {
      if (connectionStatus === 'connecting') {
        dispatch(disconnectFromSocket());
      }
    };
  }, []);

  useEffect(() => {
    if (connectionStatus === 'connecting') {
      dispatch(fetchTickers());
    }
  }, [dispatch, connectionStatus]);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
