import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import "modern-normalize";
import "./App.css";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div className='phoneBookForm'>
        <h1 className='title'>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  )
}

export default App;
