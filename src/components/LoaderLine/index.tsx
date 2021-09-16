import React from 'react';

import styles from './styles.module.scss';

const LoaderLine: React.FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderElement}></div>
    </div>
  );
};

export default LoaderLine;
