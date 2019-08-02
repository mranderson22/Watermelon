import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HouseSelect from '../components/HouseSelect';
import House from '../components/House';
import Room from '../components/Room';
import AddHousePage from '../components/AddHousePage';
import AddRoomPage from '../components/AddRoomPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/houseSelect" component={HouseSelect} />
        <PrivateRoute path="/create" component={AddHousePage} />
        <PrivateRoute path="/addRoom" component={AddRoomPage} />
        <PrivateRoute exact path="/house/:id" component={House} />
        <PrivateRoute path="/room/:id" component={Room} />
        <Route  component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;