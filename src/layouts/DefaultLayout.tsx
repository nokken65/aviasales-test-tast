import React from 'react';

import Header from '@/components/Header';

import styles from './styles.module.scss';

interface IProps {
  children?: React.ReactChild | React.ReactChild[];
}

const DefaultLayout: React.FC<IProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default DefaultLayout;
