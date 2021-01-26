import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './components/Container';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';

function App() {
  return (
    <Container>
      <ContactForm />
      <Filter />
      <ContactList />
      <ToastContainer autoClose={3000} />
    </Container>
  );
}

export default App;
