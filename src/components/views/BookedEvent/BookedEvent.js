import React from 'react';
import styles from './BookedEvent.module.scss';
import PropTypes from 'prop-types';

const BookedEvent = ({eventId}) => (
  <div className={styles.component}>
    <h2>BookedEvent view</h2>
    {eventId}
  </div>
);

BookedEvent.propTypes = {
  eventId: PropTypes.string,
};

export default BookedEvent;
