import React from 'react';
import styles from './Input.module.scss';

type InputProps = {
  label?: string;
  type?: 'password' | 'email' | 'number';
};

export const Input: React.FC<InputProps> = ({ label, type = 'text' }) => {
  return (
    <div className={styles.root}>
      {label && <span>{label}</span>}
      {type === 'password'} ?
      <div>
        <input type={type} />
      </div>
      : <input type={type} />
    </div>
  );
};
