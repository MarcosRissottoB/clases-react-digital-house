import styles from './styles.module.css';

export const SearchBox = ({placeholder, handleChange}) =>(
  <input 
      className={styles.search}
      type='search' 
      placeholder={placeholder} 
      onChange={handleChange}
  />
);