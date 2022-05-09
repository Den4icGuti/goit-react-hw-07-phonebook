import styles from './List-item.module.css';
import PropType from 'prop-types';
import { useDeleteContactMutation } from 'redux/api/services';

const ListItem = ({ name, phone, id, deleting }) => {
  const [deleteContaact, { isLoading: isDeleting }] =
    useDeleteContactMutation();
  return (
    <>
      <li className={styles.item}>
        <span className={styles.nameUser}>{name} </span>
        <span className={styles.phoneNum}>{phone} </span>
        <button
          type="button"
          className={styles.btnDel}
          onClick={() => deleteContaact(id)}
        >
          {isDeleting && <>Deleting...</>}
          Delete
        </button>
      </li>
    </>
  );
};

ListItem.proptype = {
  ListItem: PropType.node.isRequired,
};

export default ListItem;
