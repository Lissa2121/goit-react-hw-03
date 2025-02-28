import css from './Contact.module.css';

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={css.contactItem}>
      <p>{contact.name}: {contact.number}</p>
      <button onClick={() => onDeleteContact(contact.id)} className={css.deleteButton}>Delete</button>
    </li>
  );
};

export default Contact;