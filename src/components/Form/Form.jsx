import PropTypes from 'prop-types';
import { useAddContactMutation } from 'redux/api/services';
import styles from './Form.module.css';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const [addContact, { isLoading }] = useAddContactMutation();

  //===Функция отправки формы===//
  const onHandleSubmit = e => {
    e.preventDefault();
    const newContact = {
      name: e.currentTarget.elements.name.value,
      phone: e.currentTarget.elements.phone.value,
    };
    addContact(newContact);
    e.currentTarget.reset();
  };

  return (
    <>
      <form onSubmit={onHandleSubmit} className={styles.Form}>
        <h2>Phonebook</h2>
        <label className={styles.label}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={styles.label}>
          Phone
          <input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button tupe="submit" className={styles.btnSubmit} disabled={isLoading}>
          {isLoading ? 'Adding...' : 'Add contact'}
        </button>
      </form>
    </>
  );
};

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default Form;
