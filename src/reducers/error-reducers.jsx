import { GET_ERRORS } from '../actions/types';

const initialState = {
  todos: [],
  todo: {},
  error: {}
};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case GET_ERRORS: {
      // console.log(action.payload);
      return (payload.error.message) ? payload : { ...initialState, message: payload.message };
    }

    default:
      return state;
  }
};
