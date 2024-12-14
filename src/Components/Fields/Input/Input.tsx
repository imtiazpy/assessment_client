import React from 'react';
import styles from './Input.module.css';

interface IInput extends React.ComponentPropsWithoutRef<'div'> {
  name: string;
  type: string;
  placeholder?: string;
  handleChange?: (e: any) => void;
}

const Input: React.FC<IInput> = ({ name, type, placeholder, handleChange }) => {
  return (
    <div className={styles.inputBox}>
      <input 
        type={type}
        name={name}
        placeholder=" "
        onChange={handleChange}
        className={styles.inputField}
        required
      />
      <span className={styles.label}>{placeholder ? placeholder : name}</span>
    </div>
  );
};

export default Input;