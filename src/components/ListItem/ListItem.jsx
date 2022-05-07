import styles from './List-item.module.css';
import { useDispatch } from 'react-redux';
import PropType from 'prop-types';
import { deleteContact } from 'redux/ItemSlice';

const ListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      <li className={styles.item}>
        <span className={styles.nameUser}>{name} </span>
        <span className={styles.phoneNum}>{number} </span>
        <button type="button" className={styles.btnDel} onClick={() => null}>
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
