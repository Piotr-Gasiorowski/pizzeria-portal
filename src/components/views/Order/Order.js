import React from 'react';
import styles from './Order.module.scss';
import PropTypes from 'prop-types';

const Order = ({orderId}) => (
  <div className={styles.component}>
    <h2>Order view</h2>
    {orderId}
  </div>
);

Order.propTypes = {
  orderId: PropTypes.string,
};

export default Order;
