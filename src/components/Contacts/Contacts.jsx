import React from 'react';
import { nanoid } from 'nanoid';
import { BiHeartCircle } from 'react-icons/bi';
import {
  ContactsList,
  ContactsItem,
  ContactsItemButton,
  ContactsName,
  ContactsNumber,
} from '../Contacts/Contacts.styled';

const Contacts = ({ contacts }) => {
  return (
    <ContactsList>
      {contacts.map(contact => {
        contact.id = nanoid();
        // console.log(contact.name, contact.id);
        return (
          <ContactsItem key={contact.id}>
            <BiHeartCircle />
            <ContactsName>{contact.name}:</ContactsName>
            <ContactsNumber>{contact.number}</ContactsNumber>
            <ContactsItemButton type="button">x</ContactsItemButton>
          </ContactsItem>
        );
      })}
    </ContactsList>
  );
};

export default Contacts;
