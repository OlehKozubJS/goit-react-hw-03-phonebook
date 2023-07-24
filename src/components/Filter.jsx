import propTypes from 'prop-types';
import FilterStyles from './PhonebookCSS/Filter.module.css';

export const Filter = ({ changeFunction }) => {
  return (
    <label htmlFor="searchInput" className={FilterStyles.searchInputLabel}>
      <h3 className={FilterStyles.searchInputHeader}>Find contacts by name</h3>
      <input
        type="text"
        id="searchInput"
        className={FilterStyles.searchInput}
        onChange={event => changeFunction(event.currentTarget.value)}
      />
    </label>
  );
};

Filter.propTypes = {
  changeFunction: propTypes.func.isRequired,
};
