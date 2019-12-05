import React, { Component } from 'react';
import './completed-todos.scss';
import { Link } from 'react-router-dom';

class CompletedTodos extends Component {
  render() {
    return (

      <div class="container">
        <h3 class="completed-page__header">Completed Todos</h3>
        <div class="row">
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link href="#" class="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link href="#" class="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link href="#" class="btn btn-primary">Go somewhere</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CompletedTodos;