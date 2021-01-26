// import { createSelector } from 'reselect';
import { createSelector } from '@reduxjs/toolkit';

export const getEntities = state => state.contacts.entities;
export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.isLoading;

export const getVisibleContacts = createSelector(
  [getEntities, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

//====================================================
// export { default as contactsOperations } from '';
// export { default as contactsSelectors } from '';
// export { changeFilter } from './contactsAction';

// import {
//   contactsOperations,
//   contactsSelectors,
//   changeFilter,
// } from 'redux/contacts';
