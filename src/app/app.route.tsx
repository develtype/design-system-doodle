import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ButtonPage } from 'src/page/button/button.page';
import { HomePage } from 'src/page/home/home.page';

export const AppRoute = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path='button' element={<ButtonPage />} />
      <Route path='*' element={<Navigate replace to='/' />} />
    </Routes>
  );
};
