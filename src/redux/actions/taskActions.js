import {ADD_TASK, DELETE_TASK} from './types';

export function addTask(task) {
  return function (dispatch) {
    dispatch(addingTask(task));
  };
}

export function deleteTask(index) {
  return function (dispatch) {
    dispatch(deletingTask(index));
  };
}

function addingTask(task) {
  return {
    type: ADD_TASK,
    payload: task,
  };
}

function deletingTask(index) {
  return {
    type: DELETE_TASK,
    payload: index,
  };
}
