import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectIsCollectionFetching } from "../../Redux/Shop/shopSelector";
import Spinner from "../Spinner/Spinner";
import CollectionsOverView from "./CollectionsOverView";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

// allows us to chain multiple functions.

const CollectionOverViewContainer = compose(
  connect(mapStateToProps),
  Spinner
)(CollectionsOverView);

export default CollectionOverViewContainer;
