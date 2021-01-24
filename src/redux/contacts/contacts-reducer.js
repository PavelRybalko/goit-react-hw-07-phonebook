import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import actions from './contacts-actions';
import fetchContacts from './contacts-operations';
import {
  fetchContactsSuccess,
  fetchContactsRequest,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactSuccess,
  deleteContactRequest,
  deleteContactError,
  changeFilter,
} from './contacts-actions';

// const items = createReducer(initialState, {
//   [actions.addContact]:(state, {payload}) => [...state, payload],
//   [actions.deleteContact] : (state, {payload}) => state.filter(({id}) => id !== payload),
// });

// const filter = createReducer('', {
//   [actions.changeFilter]: (_, {payload} ) => payload;
// });

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const entities = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// const entities = createReducer([], {
//   [fetchContacts.fulfilled]: (state, action) => [...state, action.payload],
// });

const isLoading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactError]: () => false,
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  // [fetchContacts.pending]: () => true,
  // [fetchContacts.fulfilled]: () => false,
  // [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  // [fetchContacts.rejected]: (_, action) => action.payload,
  // [fetchContacts.pending]: () => null,
});

export default combineReducers({
  // items,
  filter,
  entities,
  isLoading,
  error,
});
