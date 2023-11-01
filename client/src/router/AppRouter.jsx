import React from 'react';
import { Route, Routes } from "react-router-dom";

import { MainPage } from '../pages/MainPage/MainPage';
import { TickerPage } from '../pages/TickerPage/TickerPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { Layout } from '../components/Layout/Layout';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/ticker/:ind" element={<TickerPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;