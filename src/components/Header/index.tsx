import React from 'react';

import Logo from '/public/assets/logo.png';

import styles from './styles.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.logo}
        src={Logo}
        alt="logo"
        width={60}
        height={60}
      />
    </div>
  );
};

export default Header;
