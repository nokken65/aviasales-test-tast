import React from 'react';
import { hot } from 'react-hot-loader/root';

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
