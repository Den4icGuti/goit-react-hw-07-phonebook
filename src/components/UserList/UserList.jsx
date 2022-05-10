import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ListItem from 'components/ListItem/ListItem';
import styles from './UserList.module.css';

const UserList = ({ contacts }) => {
  const filter = useSelector(state => state.filter.filter);
  const normalize = filter.toLowerCase();

  // const filteredItems = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalize)
  //   );
  // };

  const filteredItems = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalize)
  );

  // const visibleContact = filteredItems();
  return (
    <div className={styles.ListUsers}>
      <ul className={styles.list}>
        {filteredItems.map(contact => (
          <ListItem className={styles.item} key={contact.id} {...contact} />
        ))}
      </ul>
    </div>
  );
};

UserList.propTypes = {
  visibleContact: PropTypes.array,
  number: PropTypes.func,
};

export default UserList;
