import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchContacts = () => {
  return axios.get('/contacts').then(response => response.data);
};

const addContact = (name, number) => {
  return axios.post('/contacts', name, number).then(({ data }) => data);
};

const deleteContact = contactId => {
  return axios.delete(`/contacts/${contactId}`);
};

export default {
  fetchContacts,
  addContact,
  deleteContact,
};

// export async function fetchContacts() {
//   const { data } = await axios.get('/books');
//   return data;
// }
