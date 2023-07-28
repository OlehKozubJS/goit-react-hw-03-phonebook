import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Alert } from './Alert';
import { nanoid } from 'nanoid';
import PhonebookStyles from './PhonebookCSS/Pnonebook.module.css';

export class Phonebook extends Component {
  state = {
    contacts: [],
    filter: '',
    isInContacts: false,
    name: '',
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addNewContact = data => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      this.setState({ isInContacts: true, name: data.name });
      return;
    }
    this.setState(state => ({
      contacts: [...state.contacts, { id: nanoid(), ...data }],
      isInContacts: false,
      name: '',
    }));
  };

  closeAlert = () => {
    this.setState({ isInContacts: false, name: '' });
  };

  enterFilterData = value => {
    this.setState({ filter: value });
  };

  findContactsByName = () => {
    const userSearchData = this.state.filter;
    const searchResults = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(userSearchData.toLowerCase())
    );
    return searchResults;
  };

  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };

  render() {
    return (
      <div className={PhonebookStyles.phonebook}>
        <h1 className={PhonebookStyles.phonebookHeader}>Phonebook</h1>
        <ContactForm submitFunction={this.addNewContact} />
        <Alert
          isInContacts={this.state.isInContacts}
          name={this.state.name}
          clickFunction={this.closeAlert}
        />
        <h2 className={PhonebookStyles.contactsHeader}>Contacts</h2>
        <Filter className="filterInput" changeFunction={this.enterFilterData} />
        <ContactList
          className="contactList"
          items={
            this.state.filter === ''
              ? this.state.contacts
              : this.findContactsByName()
          }
          clickFunction={this.deleteContact}
        />
      </div>
    );
  }
}
