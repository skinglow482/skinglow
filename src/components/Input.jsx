import styles from '../styles/Input.module.css';

const Input = ({ type = 'text', placeholder, value, onChange, ...props }) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default Input;