import React, { useContext } from "react";
import CustomButton from "../CustomButton/CustomButton";
import "../../Sass/collection-item.styles.scss";
import { CartContext } from "../../Provider/Cart-Provider/CartProvider";

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const { addItem } = useContext(CartContext);

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">💲{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to Bag
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
