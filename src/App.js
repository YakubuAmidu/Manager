import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import thunk from 'redux-thunk';
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
    const store = createStore(reducers, {}, applyMiddleware(thunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
