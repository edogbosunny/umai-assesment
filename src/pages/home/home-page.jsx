import React, { Component } from 'react';
import './home-page.scss';
import { connect } from 'react-redux';
import { fetchTodo } from '../../actions/todo-actions';

class HomePage extends Component {

  async componentDidMount() {
    this.props.fetchTodo();
    console.log('----->', this.props);
  }
  render() {
    return (
      <div className="container">
        <h3 className="home__header">Pending Todos</h3>
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Text</h4>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><span className="home__date-tags">Due Date: </span> {'12/12/12'}</p>
                <p className="card-text"><span className="home__date-tags">Date Completed: </span> {'12/12/12'}</p>
                <div className="form-check-inline">
                  <label className="">
                    <input type="checkbox" className="form-check-input home__big-checkbox" value="" />
                    <span className="home__checkbox-label">{'Pending'}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todo
})

export default connect(mapStateToProps, { fetchTodo })(HomePage);