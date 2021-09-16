import React from 'react';

import Logo from '/public/assets/logo.png';

import styles from './styles.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.logo} src={Logo} alt="" width={99} height={36} />
    </div>
  );
};

export default Header;
