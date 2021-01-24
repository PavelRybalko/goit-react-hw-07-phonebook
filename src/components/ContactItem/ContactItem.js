import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import s from './ContactItem.module.css';

const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <li className={s.ContactList__item}>
        <p className={s.ContactList__text}>
          <span>{name}</span> : <span>{number}</span>
        </p>
        <button
          type="button"
          onClick={() => dispatch(contactsOperations.deleteContact(id))}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
