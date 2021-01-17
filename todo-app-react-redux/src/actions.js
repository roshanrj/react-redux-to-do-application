import {
    ADD_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    ADD_TODO,
    DELETE_TODO
  } from './constants';
  
  export function addTask(payload) {
    return {
      type: ADD_TASK,
      payload,
    };
  }
  
  export function deleteTask({filteredTasks}) {
    return {
      type: DELETE_TASK,
      payload: filteredTasks,
    };
  }

  export function updateTask({updatedTasks}) {
    return {
      type: UPDATE_TASK,
      payload: updatedTasks,
    };
  }

  export function addToDoList({updatedTasks}) {
    return {
      type: ADD_TODO,
      payload: updatedTasks,
    };
  }

  export function deleteToDoList({filteredTasks}) {
    return {
      type: DELETE_TODO,
      payload: filteredTasks,
    };
  }
  /*
  
  export function getAgentDetail(payload) {
    return {
      type: GET_AGENT_DETAIL,
      payload,
    };
  }
  
  export function setAgentDetail(payload) {
    return {
      type: SET_AGENT_DETAIL,
      payload,
    };
  }
  
  export function getRiskMeterRequestData(payload) {
    return {
      type: GET_RISK_METER_REQUEST_DATA,
      payload,
    };
  }
  
  export function setResult(payload) {
    return {
      type: SET_RESULT,
      payload,
    };
  }
  
  export function getResult(payload) {
    return {
      type: GET_RESULT,
      payload,
    };
  }
  
  export function getResultUsingMobileNo(payload) {
    return {
      type: GET_RESULT_USING_MOBILE_NO,
      payload,
    };
  } */
  