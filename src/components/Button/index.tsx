import clsx from 'clsx';
import React from 'react';

import styles from './styles.module.scss';

interface IProps {
  children?: React.ReactNode;
  classes?: string[];
  onClick?: () => void;
}

const Button: React.FC<IProps> = ({ children, classes = [], onClick }) => (
  <button
    className={clsx(styles.wrapper, ...classes)}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
