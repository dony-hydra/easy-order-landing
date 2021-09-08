import React, { lazy, Suspense } from "react";

import { Switch, Route } from "react-router-dom";

const routerConfig = [
  {
    exact: true,
    path: "/",
    component: lazy(() => import("../src/pages/Home")),
  },
  {
    exact: true,
    path: "/checkout",
    component: lazy(() => import("../src/pages/Checkout")),
  },
  {
    exact: true,
    path: "/order-status",
    component: lazy(() => import("../src/pages/OrderStatus")),
  },
  {
    exact: true,
    path: "/product/:id",
    component: lazy(() => import("../src/pages/ProductDetail")),
  },
];

const renderRouter = (router) => (
  <Suspense fallback={() => <div>Loading...</div>}>
    <Switch>
      {router.map((route, i) => {
        const Component = route.component;
        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => <Component {...props} />}
          />
        );
      })}
    </Switch>
  </Suspense>
);

function Routers() {
  return renderRouter(routerConfig);
}

export default Routers;
