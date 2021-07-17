import React, { useContext } from "react";
import CollectionItem from "../../components/CollectionItem/CollectionItem";
import CollectionsContext from "../../Context/Collections/collectionContext";
import "../../Sass/collection.styles.scss";

const CollectionPage = ({ match }) => {
  console.log("===== Match =====>>>");

  // second way is using ContextAPI(CollectionContext)to consume our collection
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId];

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );

  // Firts way is using ContextAPI(CollectionContext)to consume our collection

  // return (
  //   <CollectionsContext.Consumer>
  //     {(collections) => {
  //       const collection = collections[match.params.collectionId];
  //       const { title, items } = collection;
  //       return (
  //         <div className="collection-page">
  //           <h2 className="title">{title}</h2>
  //           <div className="items">
  //             {items.map((item) => (
  //               <CollectionItem key={item.id} item={item} />
  //             ))}
  //           </div>
  //         </div>
  //       );
  //     }}
  //   </CollectionsContext.Consumer>
  // );
};

export default CollectionPage;
