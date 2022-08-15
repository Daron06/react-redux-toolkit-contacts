import React from 'react';
import styles from './Paper.module.scss';
type PaperProps = {
  children: React.ReactNode;
};

export const Paper: React.FC<PaperProps> = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};
