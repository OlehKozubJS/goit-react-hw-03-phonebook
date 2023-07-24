import propTypes from 'prop-types';
import AlertStyles from './PhonebookCSS/Alert.module.css';

export const Alert = ({ isInContacts, clickFunction, name }) => {
  return (
    <div className={isInContacts ? AlertStyles.alert : AlertStyles.hidden}>
      <span className={AlertStyles.alertText}>
        {name} is already in contacts!
      </span>
      <button className={AlertStyles.alertButton} onClick={clickFunction}>
        Close
      </button>
    </div>
  );
};

Alert.propTypes = {
  isInContacts: propTypes.bool.isRequired,
  clickFunction: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
};
