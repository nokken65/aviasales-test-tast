// eslint-disable-next-line simple-import-sort/imports
import { hot } from 'react-hot-loader/root';
import React from 'react';

import DefaultLayout from '@/layouts/DefaultLayout';

import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <DefaultLayout>
      <Home />
    </DefaultLayout>
  );
};

export default hot(App);
