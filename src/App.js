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
      apiKey: 'AIzaSyASeC2VO9Iebej6tCixqgwWPZ8MiHYNZjI',
      authDomain: 'manager-f6e76.firebaseapp.com',
      projectId: 'manager-f6e76',
      storageBucket: 'manager-f6e76.appspot.com',
      messagingSenderId: '156250609563',
      appId: '1:156250609563:web:0010fa7b79f92e00d0f33e',
      measurementId: 'G-KD2KVP003Q',
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
