import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ListItem from 'components/ListItem/ListItem';
import styles from './UserList.module.css';

const UserList = ({ contacts }) => {
  const filter = useSelector(state => state.filter.filter);
  const normalize = filter.toLowerCase();

  const filteredItems = () => {
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalize)
    );
  };

  const visibleContact = filteredItems();
  return (
    <div className={styles.ListUsers}>
      <ul className={styles.list}>
        {visibleContact.map(contacts => (
          <ListItem className={styles.item} key={contacts.id} {...contacts} />
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
