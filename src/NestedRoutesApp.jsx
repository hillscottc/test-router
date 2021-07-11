import React from "react";
import {BrowserRouter as Router, Link, Switch} from "react-router-dom";
import {RouteWithSubRoutes} from "./RouteWithSubRoutes";
import RouteContentWrapper from "./RouteContentWrapper";


const routes = [
    {
        path: "/sandwiches",
        component: Sandwiches
    },
    {
        path: "/tacos",
        component: Tacos,
        routes: [
            {
                path: "/tacos/bus",
                component: Bus
            },
            {
                path: "/tacos/cart",
                component: Cart
            }
        ]
    }
];


export default function NestedRoutesApp() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/tacos">Tacos</Link>
                    </li>
                    <li>
                        <Link to="/sandwiches">Sandwiches</Link>
                    </li>
                </ul>

                <Switch>
                    {routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))}
                </Switch>
            </div>
        </Router>
    );
}

function Sandwiches() {
    return <h2>Sandwiches</h2>;
}


function Tacos({ routes }) {
    const title = 'Tacos'
    const leftNav = (
        <ul>
            <li>
                <Link to="/tacos/bus">Bus</Link>
            </li>
            <li>
                <Link to="/tacos/cart">Cart</Link>
            </li>
        </ul>
    )
    return (
        <RouteContentWrapper
            {...{title, leftNav, routes}}
        />
    )
}


// function Tacos({ routes }) {
//     return (
//         <div>
//             <h2>Tacos</h2>
//             <div>
//                 <div className='mainLeftCol'>
//                     <ul>
//                         <li>
//                             <Link to="/tacos/bus">Bus</Link>
//                         </li>
//                         <li>
//                             <Link to="/tacos/cart">Cart</Link>
//                         </li>
//                     </ul>
//                 </div>
//
//                 <div className='mainRightCol'>
//                     <Switch>
//                         {routes.map((route, i) => (
//                             <RouteWithSubRoutes key={i} {...route} />
//                         ))}
//                     </Switch>
//                 </div>
//             </div>
//         </div>
//     );
// }

function Bus() {
    return <h3>Bus</h3>;
}

function Cart() {
    return <h3>Cart</h3>;
}
