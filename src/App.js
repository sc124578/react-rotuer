import React, { Fragment } from "react";

import Header from "./common/Header";
import CardList from "./home/CardList";
import User from "./user/User";
import UserProfile from "./user/UserProfile";
import { Link, Route, Switch, useLocation } from "react-router-dom";


function Home() {
  return (
<div>
        <CardList />
        </div>
  )
}
function Profile() {
return (
<div>
<User/>
</div>
)
}
function App() {
  /*
    TODO: There is no need to add a <Router >, it is in index.js.

    The <CardList /> component should be shown when the user is on the index path.

    The <User /> component should be shown when the user is on the following path:
    /users/:userId

    Display <NotFound /> when appropriate
  */
  return (
    <div className="App">
      <Header />
    <Switch>
    <Route exact path = "/">
        <Home />
        </Route>
        <Route exact path = "/users/:userId">
          <Profile />
        </Route>
        </Switch>  
        </div>
    /*<Fragment>
      <Header />
      <User />
      <CardList />
    </Fragment>*/
  );
}

export default App;
