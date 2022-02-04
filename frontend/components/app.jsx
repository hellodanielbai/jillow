import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import Modal from "./session_form/modal";
import NavbarContainer from "./navbar/navbar_container";
import ListingsContainer from "./listings/listings_container";
import CreateListingContainer from "./listings/listing_create_container";
import Search from "./search/search";
import Splash from "./splash/splash";



const App = () => (
    <div>
        <Route path="/" component={ Modal } />
        <NavbarContainer />

        <Switch>
            <Route exact path="/listings" component={ListingsContainer} />
            <Route exact path="/buy" component={Search} />
            <ProtectedRoute exact path="/sell" component={CreateListingContainer} />
            <Route exact path="/" component={Splash} />
        </Switch>
    </div>
);

export default App