import propTypes from 'prop-types';
import ContactListStyles from './PhonebookCSS/ContactList.module.css';

export const ContactList = ({ items, clickFunction }) => {
  return (
    <ul className={ContactListStyles.contactList}>
      {items.map(item => (
        <li key={item.id} className={ContactListStyles.contactListItem}>
          <span className={ContactListStyles.contactListItemText}>
            {item.name}: {item.number}
          </span>
          <button
            data-id={item.id}
            className={ContactListStyles.contactListItemButton}
            onClick={event => clickFunction(event.currentTarget.dataset.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  clickFunction: propTypes.func.isRequired,
};
