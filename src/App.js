import React, { createContext, useEffect, useReducer } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

import Navbar from "./components/Navbar";
import CreatePost from "./components/Screens/CreatePost";
import Home from "./components/Screens/Home";
import Profile from "./components/Screens/Profile";
import Signin from "./components/Screens/Signin";
import Signup from "./components/Screens/Signup";
import { initialState, reducer } from "./reducer/userReducer";

export const UserContext = createContext();

// We need to acess the history so that we can route the user to the specific
// pages accordingly
// But we cannot access this inside the browser inside the app since all our
// routes are inside the browser router. So we will make a sperate component and
// then call it in the App

const Routing = () => {
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      history.push("/");
    } else {
      history.push("/signin");
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signin">
        {" "}
        <Signin />
      </Route>
      <Route path="/signup">
        {" "}
        <Signup />
      </Route>
      <Route path="/profile">
        {" "}
        <Profile />
      </Route>
      <Route path="/create">
        {" "}
        <CreatePost />
      </Route>
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
