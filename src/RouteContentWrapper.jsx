import {Link, Switch} from "react-router-dom";
import React from "react";
import {RouteWithSubRoutes} from "./RouteWithSubRoutes";

export default function RouteContentWrapper({ title, leftNav, routes }) {
    return (
        <div>
            <h2>{title}</h2>
            <div>
                <div className='mainLeftCol'>
                    {leftNav}
                </div>

                <div className='mainRightCol'>
                    <Switch>
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))}
                    </Switch>
                </div>
            </div>
        </div>
    );
}
