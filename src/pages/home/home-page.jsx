import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchTodo } from '../../actions/todo-actions';

class HomePage extends Component {

  async componentDidMount() {
    this.props.fetchTodo();
  }
  render() {
    return (
      <div>
        I am the homepage@!
      </div>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todo
})

export default connect(mapStateToProps, { fetchTodo })(HomePage);