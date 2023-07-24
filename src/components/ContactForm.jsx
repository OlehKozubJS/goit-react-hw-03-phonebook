import { Component } from 'react';
import propTypes from 'prop-types';
import ContactFormStyles from './PhonebookCSS/ContactForm.module.css';

export class ContactForm extends Component {
  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = event.currentTarget.elements;
    this.props.submitFunction({ name: name.value, number: number.value });
    event.currentTarget.reset();
  };

  render() {
    return (
      <form
        className={ContactFormStyles.contactForm}
        onSubmit={this.handleSubmit}
        value={this.state}
      >
        <label htmlFor="name">
          <h3 className={ContactFormStyles.contactFormInputHeader}>Name</h3>
          <input
            type="text"
            className={ContactFormStyles.contactFormInput}
            id="name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="number">
          <h3 className={ContactFormStyles.contactFormInputHeader}>Number</h3>
          <input
            type="tel"
            id="number"
            name="number"
            className={ContactFormStyles.contactFormInput}
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button
          className={ContactFormStyles.contactFormSubmitButton}
          type="submit"
        >
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  submitFunction: propTypes.func.isRequired,
};
