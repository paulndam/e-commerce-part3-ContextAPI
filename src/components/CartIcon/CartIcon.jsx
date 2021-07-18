import React, { useContext } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../Redux/CartReducer/cartAction";
import { selectCartItemsCount } from "../../Redux/CartReducer/cartSelector";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "../../Sass/cart-icon.styles.scss";
import { CartContext } from "../../Provider/Cart-Provider/CartProvider";

const CartIcon = () => {
  const { toggleCartHidden, cartItemsCount } = useContext(CartContext);
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// });

// const mapStateToProps = createStructuredSelector({
//   itemCount: selectCartItemsCount,
// });

//export default connect(mapStateToProps)(CartIcon);

export default CartIcon;
