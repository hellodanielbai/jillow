import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

import NavbarContainer from "./navbar/navbar_container";
import ListingsContainer from "./listings/listings_container";
// import ListingShowContainer from "./listings/listing_show_container"
import Modal from "./session_form/modal";


const App = () => (
    <div>
        <Modal />
        <NavbarContainer />
        <Switch>
            <Route path="/listings" component={ListingsContainer} />
        </Switch>
    </div>
);

export default App