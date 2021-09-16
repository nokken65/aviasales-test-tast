import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  children?: React.ReactChild | React.ReactChild[] | React.ReactNode;
}

const Card: React.FC<IProps> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Card;
