import React from 'react';

import styles from './styles.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src="/assets/logo.png" alt="" />
    </div>
  );
};

export default Header;
