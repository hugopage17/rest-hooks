import { createStore } from 'redux';

const initialState = {
  user:{},
  url:''
}

export const store = createStore(
  reducer,
  initialState
)

function reducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    case 'SET_URL':
      return{
        ...state,
        url:action.payload
      }
    default:
      return state;
  }
}
