import { ADD_TODO, EDIT_TODO, DELETE_TODO, FETCH_TODO, GET_ERRORS } from './types';

export const fetchTodo = () => async (dispatch) => {
  const todoResponse = localStorage.getItem('todos');
  if (todoResponse === null || todoResponse === undefined) {
    try {
      localStorage.setItem('todos', [])
    } catch (err) {
      return dispatch({
        type: GET_ERRORS,
        payload: err
})
    }
    return dispatch({
      type: GET_ERRORS,
      payload: todoResponse
    })
  }
}
// export const addTodo = (todoPayload) => (dispatch) => {
//   localStorage.setItem('todos', todoPayload);
//   return dispatch({
//     type: ADD_TODO,
//     payload: todoPayload
//   })
// }

// export const editTodo = (todoPayload) => (dispatch) => {
//   localStorage.setItem('todos', todoPayload);
//   return dispatch({
//     type: ADD_TODO,
//     payload: todoPayload
//   })
// }


// export const deleteTodo = (todoPayload) => (dispatch) => {
//   localStorage.setItem('todos', todoPayload);
//   return dispatch({
//     type: ADD_TODO,
//     payload: todoPayload
//   })
// }