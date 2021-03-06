import React, { useContext } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import CartItem from "../CartItem/CartItem";
import { selectCartItems } from "../../Redux/CartReducer/cartSelector";
import { toggleCartHidden } from "../../Redux/CartReducer/cartAction";
import "../../Sass/cart-dropdown.styles.scss";
import { CartContext } from "../../Provider/Cart-Provider/CartProvider";

const CartDropDown = ({ history }) => {
  const { cartItems, toggleCartHidden } = useContext(CartContext);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden();
        }}
      >
        Check-Out
      </CustomButton>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems,
// });

//export default withRouter(connect(mapStateToProps)(CartDropDown));

export default withRouter(CartDropDown);
