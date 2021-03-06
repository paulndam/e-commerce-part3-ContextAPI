import React, { useContext } from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../Redux/CartReducer/cartAction";
import "../../Sass/checkout-item.styles.scss";
import { CartContext } from "../../Provider/Cart-Provider/CartProvider";

const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="itemImage" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10008;
      </div>
    </div>
  );
};

// const mapStateToProps = (dispatch) => ({
//   clearItem: (item) => dispatch(clearItemFromCart(item)),
//   // addItem: (item) => dispatch(addItem(item)),
//   // removeItem: (item) => dispatch(removeItem(item)),
// });

//export default connect(null, mapStateToProps)(CheckOutItem);

export default CheckOutItem;
