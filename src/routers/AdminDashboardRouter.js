import React from "react";
import { Redirect, Route, Switch, useHistory } from "react-router";
export default function AdminDashboardRouter({ menu_list }) {
  let history = useHistory();
  const user_type = localStorage.getItem("user_type", "");
  let child_routes = [];
  return (
    <>
      {user_type !== "admin" ? (
        history.push("/")
      ) : (
        <Switch>
          <Route exact path="/admin">
            <Redirect to="/admin/dashboard" />
          </Route>
          {menu_list.map((val, index) => {
            child_routes = [...child_routes, ...val.children];
            return (
              <Route exact path={val.link} key={index}>
                {val.element}
              </Route>
            );
          })}

          {child_routes.length > 0
            ? child_routes.map((val, index) => {
                return (
                  <Route exact path={val.link} key={index}>
                    {val.element}
                  </Route>
                );
              })
            : console.log("No Child Routes")}
        </Switch>
      )}
    </>
  );
}
