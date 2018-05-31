import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDdeRt61UduexcPg6VWPtOhaqyM4TPiY2E",
            authDomain: "manager-70865.firebaseapp.com",
            databaseURL: "https://manager-70865.firebaseio.com",
            projectId: "manager-70865",
            storageBucket: "manager-70865.appspot.com",
            messagingSenderId: "956472465895"
        });
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;