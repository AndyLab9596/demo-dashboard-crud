import React from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import { NotFound } from "./components/Common";
import AdminLayout from "./components/Layout/Admin";
import LoginPage from "./features/Auth/pages/LoginPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <LoginPage />
        </Route>
        <Route path="/admin">
          <AdminLayout />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
