import { CHATS_SAVE } from '../actions/chats';
import data from 'src/data.js';


export const initialState = {
  list: data,
};
// console.log(data);
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHATS_SAVE: {
      return {
        ...state,
        list: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
