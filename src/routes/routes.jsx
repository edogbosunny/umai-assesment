import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/home/home-page';
import NotFound from '../pages/not-found/not-found'
import NavBar from '../atom-components/nav-bar/nav-bar';
import CompletedTodos from '../pages/completed-todos/completed-todos';
import TrashedTodos from '../pages/trash-page/trash-page';
import CreateTodo from '../pages/create-todo/create-todo';

const routes = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/completed-todos' component={CompletedTodos} />
        <Route exact path='/trashed-todos' component={TrashedTodos} />
        <Route exact path='/create-todo' component={CreateTodo} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default routes;