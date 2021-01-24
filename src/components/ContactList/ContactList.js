import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactList.module.css';
import ContactItem from '../ContactItem';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

const ContactList = () => {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(contactsSelectors.getIsLoading);
  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2 className={s.title}>Contacts</h2>
      {isLoadingContacts && <h1 className={s.loading}>Загружаю...</h1>}
      {contacts.length > 0 && (
        <ul className={s.ContactList}>
          {contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
