import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../pages/home/home-page';
import NotFound from '../pages/not-found/not-found';
import store from '../store';

const routes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default routes;