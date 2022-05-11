import styles from './List-item.module.css';
import PropType from 'prop-types';
import { useDeleteContactMutation } from 'redux/api/services';

const ListItem = ({ name, phone, id }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <>
      <li className={styles.item} key={id}>
        <span className={styles.nameUser}>{name} </span>
        <span className={styles.phoneNum}>{phone} </span>
        <button
          type="submit"
          className={styles.btnDel}
          onClick={() => deleteContact(id)}
          disabled={isDeleting}
        >
          {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
      </li>
    </>
  );
};

ListItem.proptype = {
  ListItem: PropType.node.isRequired,
};

export default ListItem;
