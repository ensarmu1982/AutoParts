import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import PageNotFound from '../components/PageNotFound';
import Location from "../components/Location";
import Service from "../components/Service";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Location} exact ={true} />
        <Route path="/ymmt/serviceList" component={Service} exact ={true}/>
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
