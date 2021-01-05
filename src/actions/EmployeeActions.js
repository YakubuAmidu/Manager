import {Actions} from 'react-native-router-flux';
import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE} from './types';

export const employeeUpdate = ({prop, value}) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: {prop, value},
  };
};

export const employeeCreate = ({name, phone, shift}) => {
  const {currentUser} = firebase.auth();

  return () => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({namne, phone, shift})
      .then(() => {
        dispatch({type: EMPLOYEE_CREATE});
        Actions.pop({type: 'reset'});
      });
  };
};

export const employeeFetch = () => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on('value', (snapshot) => {
        dispatch({type: EMPLOYEE_FETCH_SUCCESS, payload: snapshot.val()});
      });
  };
};
