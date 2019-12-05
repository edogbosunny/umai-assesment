import { ADD_TODO, EDIT_TODO, DELETE_TODO, FETCH_TODO } from '../actions/types';

const initialState = {
  todos: [],
  todo: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: action.payload
      }
    // case EDIT_TODO:
    //   return {
    //     ...state,
    //     todos: action.payload
    //   }
    // case FETCH_TODO:
    //   return {
    //     ...state,
    //     todos: action.payload
    //   }
    // case DELETE_TODO:
    //   return {
    //     ...state,
    //     todos: action.payload
    //   }
    default:
      return state;
  }
}