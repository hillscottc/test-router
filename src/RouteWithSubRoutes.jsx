import {Route} from "react-router-dom";
import React from "react";

// A wrapper for <Route> that handles "sub"-routes by passing them as
// `routes` prop to the component it renders.

export function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes}/>
            )}
        />
    );
}