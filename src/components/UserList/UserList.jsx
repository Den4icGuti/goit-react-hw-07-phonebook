import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ListItem from 'components/ListItem/ListItem';
import styles from './UserList.module.css';

const UserList = ({ contacts }) => {
  const filter = useSelector(state => state.filter.filter);
  const normalize = filter.toLowerCase();

  const filteredItems = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalize)
  );

  return (
    <div className={styles.ListUsers}>
      <ul className={styles.list}>
        {filteredItems.map(items => (
          <ListItem
            className={styles.item}
            key={items.id}
            {...items}
            // deleteContact={deleteContact}
          />
        ))}
      </ul>
    </div>
  );
};

UserList.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};

export default UserList;
