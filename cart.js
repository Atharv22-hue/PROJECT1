import React ,{useState}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartIcon({ itemCount }) {
  return (
    <div style={styles.cartContainer}>
      <FontAwesomeIcon icon={faShoppingCart} style={styles.cartIcon} />
      {itemCount > 0 && <span style={styles.itemCount}>{itemCount}</span>}
    </div>
  );
}

const styles = {
  cartContainer: {
    position: 'relative',
    display: 'inline-block',
  },
  cartIcon: {
    fontSize: '24px',
    color: '#333',
    cursor: 'pointer',
  },
  itemCount: {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    padding: '2px 6px',
    fontSize: '12px',
  },
};

export default CartIcon;
