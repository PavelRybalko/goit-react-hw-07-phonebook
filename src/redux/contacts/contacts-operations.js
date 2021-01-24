// import contactActions from './contacts-actions';
import { createAsyncThunk } from '@reduxjs/toolkit';
import phonebookAPI from 'services/phonebookAPI';
import * as actions from './contacts-actions';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4040';

// const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, { rejectWithValue }) => {
//     //payload при success
//     try {
//       const contacts = await phonebookAPI.fetchContacts();
//       return contacts;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );

const addContact = (name, number) => dispatch => {
  const contact = { name, number };
  dispatch(actions.addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch(error => dispatch(actions.addContactError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteContactSuccess(id)))
    .catch(error => dispatch(actions.deleteContactError(error)));
};

const fetchContacts = () => dispatch => {
  dispatch(actions.fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
    .catch(error => dispatch(actions.fetchContactsError(error)));
};

const exportModule = {
  addContact,
  deleteContact,
  fetchContacts,
};

export default exportModule;
