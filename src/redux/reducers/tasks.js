import {ADD_TASK, DELETE_TASK} from '../actions/types';

const initialState = {
  tasks: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK: {
      return {...state, tasks: [...state.tasks, action.payload]};
    }
    case DELETE_TASK: {
      let newArr = [...state.tasks];
      newArr[action.payload].active = !newArr[action.payload].active;
      return {
        ...state,
        tasks: newArr,
      };
    }
    default: {
      return state;
    }
  }
}
