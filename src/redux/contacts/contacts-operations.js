import { createAsyncThunk } from '@reduxjs/toolkit';
import phonebookAPI from 'services/phonebookAPI';
// import * as actions from './contacts-actions';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await phonebookAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const data = await phonebookAPI.addContact({ name, number });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// const addContact = (name, number) => dispatch => {
//   const contact = { name, number };
//   dispatch(actions.addContactRequest());

//   axios
//     .post('/contacts', contact)
//     .then(({ data }) => dispatch(actions.addContactSuccess(data)))
//     .catch(error => dispatch(actions.addContactError(error)));
// };

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await phonebookAPI.deleteContact(id);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// const deleteContact = id => dispatch => {
//   dispatch(actions.deleteContactRequest());

//   axios
//     .delete(`/contacts/${id}`)
//     .then(() => dispatch(actions.deleteContactSuccess(id)))
//     .catch(error => dispatch(actions.deleteContactError(error)));
// };

const exportModule = {
  addContact,
  deleteContact,
  fetchContacts,
};

export default exportModule;
