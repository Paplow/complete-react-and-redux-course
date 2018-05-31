import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBuXXozu598b-PClk3E7GZAUQ614YhOxfY",
            authDomain: "auth-c6616.firebaseapp.com",
            databaseURL: "https://auth-c6616.firebaseio.com",
            projectId: "auth-c6616",
            storageBucket: "auth-c6616.appspot.com",
            messagingSenderId: "515219548053"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user)
                this.setState({ loggedIn: true });
            else
                this.setState({ loggedIn: false });
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return (
                    <View style={{justifyContent: 'center', alignItems: 'center', height: 500}}>
                        <Spinner size="large" />
                    </View>
                );
        }
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication'/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;