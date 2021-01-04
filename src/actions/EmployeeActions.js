import {EMPLOYEE_UPDATE} from './types';

export const employeeUpdate = ({prop, value}) => {
  return {
    types: EMPLOYEE_UPDATE,
    payload: {props, value},
  };
};
