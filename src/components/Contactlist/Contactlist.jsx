import css from './ContactList.module.css';
// import { useSelector, } from 'react-redux';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { getStateFilter } from 'redux/contacts/filterSlice';
import { useSelector } from 'react-redux';

function Contactlist() {
  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);
  const filter = useSelector(getStateFilter);
  const filteredContacts = contacts.filter(
    contact =>
      contact.name && contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className={css.container}>
      <h2 className={css.title}>Contact List</h2>
      <ul className={css.list}>
        {filteredContacts.length !== 0 ? (
          filteredContacts.map(contact => (
            <ContactListItem
              id={contact.id}
              key={contact.id}
              name={contact.name}
              number={contact.number}
            />
          ))
        ) : (
          <p>List is empty</p>
        )}
      </ul>
    </div>
  );
}

export default Contactlist;
