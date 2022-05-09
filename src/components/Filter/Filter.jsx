import styles from './Filter.module.css';
// import { useState } from 'react';
import { searchByName } from 'redux/ItemSlice';
import { useSelector, useDispatch } from 'react-redux';

import PropType from 'prop-types';

const Filter = () => {
  const getFilrter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  return (
    <div className={styles.BoxFilter}>
      <h2>Find contacts by name</h2>
      <label className={styles.Filter}>
        Find contacts by name
        <input
          type="text"
          value={getFilrter}
          onChange={e => dispatch(searchByName(e.currentTarget.value))}
        />
      </label>
    </div>
  );
};

Filter.proptype = {
  Filter: PropType.node.isRequired,
};

export default Filter;
