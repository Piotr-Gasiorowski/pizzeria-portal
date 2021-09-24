import React from 'react';
import styles from './BookedTable.module.scss';
import PropTypes from 'prop-types';

const BookedTable = ({tableId}) => (
  <div className={styles.component}>
    <h2>BookedTable view</h2>
    {tableId}
  </div>
);

BookedTable.propTypes = {
  tableId: PropTypes.string,
};

export default BookedTable;
