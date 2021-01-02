import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    var firebaseConfig = {
      apiKey: 'AIzaSyBINXkFLe_nsBTIZ39vPYAgvXniHuMAXSs',
      authDomain: 'manager-1e1cf.firebaseapp.com',
      projectId: 'manager-1e1cf',
      storageBucket: 'manager-1e1cf.appspot.com',
      messagingSenderId: '868870481889',
      appId: '1:868870481889:web:1f39f38ab003ea8d1b14a0',
      measurementId: 'G-EW5384KL4D',
    };

    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
