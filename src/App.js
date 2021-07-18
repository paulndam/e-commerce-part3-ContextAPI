import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./Sass/App.scss";

import HomePage from "./pages/HomePage/HomePage.jsx";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header.jsx";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/SignInAndSignUpPage.jsx";
import CheckOut from "./pages/CheckOut/CheckOut";

import { setCurrentUser } from "./Redux/UserReducer/userAction";
import { selectCurrentUser } from "./Redux/UserReducer/userSelector";
import { checkUserSession } from "./Redux/UserReducer/userAction";
import CurrentUserContext from "./Context/CurrentUser/Current-User-Context";

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    //setUser(currentUser)
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
      </CurrentUserContext.Provider>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckOut} />

        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
