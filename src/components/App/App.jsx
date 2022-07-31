import React, { Component } from 'react';
import { AppContainer, H1, H2, PhonebookContainer } from '../App/App.styled';
import ContactsForm from '../Phonebook/Phonebook';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSumbit = data => {
    this.setState({
      contacts: [...this.state.contacts, data],
    });
  };

  render() {
    return (
      <AppContainer>
        <PhonebookContainer>
          <H1>Phonebook</H1>
          <ContactsForm onSubmit={this.formSumbit} />
          <H2>Contacts</H2>
          <Filter />
          <Contacts contacts={this.state.contacts} />
        </PhonebookContainer>
      </AppContainer>
    );
  }
}
export default App;
