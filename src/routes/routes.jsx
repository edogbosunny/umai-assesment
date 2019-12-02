import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home/home-page';
import NotFound from '../pages/not-found/not-found'

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default routes;