import bgImg from '../../imgs/not_found.png';

import './NotFoundPage.scss';

export const NotFoundPage = () => {
  return (
    <div className="NotFoundPage" data-testid="not-found-page">
      <img
        src={bgImg}
        alt="Not found page"
        className="NotFoundPage__img"
      />
    </div>
  );
};