import classNames from 'classnames';
import { useDispatch, useSelector} from 'react-redux';

import { selectActiveFilter } from '../../store/selectors/selectors';

import { changeFilter } from '../../store/slices/filterSlice';

import './Filters.scss';

export const Filters = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectActiveFilter);

  return (
    <div className="Filters">
      <button
        className={classNames("Filters__all", "toggle", { active: status === 'all' })}
        onClick={() => dispatch(changeFilter('all'))}
      >
        All
      </button>
      <button
        className={classNames("Filters__profitable", "toggle", { active: status === 'raised' })}
        onClick={() => dispatch(changeFilter('raised'))}
      >
        Profitable
      </button>
      <button
        className={classNames("Filters__losing", "toggle", { active: status === 'fallen' })}
        onClick={() => dispatch(changeFilter('fallen'))}>
        Losing
      </button>
    </div>
  );
};
