import React from 'react';
import { View, Text, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, onAccept, onDecline, visible }) => {
    const { cardsectionStyle, textStyle, containerStyle } = styles;

    return (
        <Modal
            animationType={'slide'}
            onRequestClose={() => {}}
            transparent
            visible={visible}
        >
            <View style={containerStyle}>
                <CardSection style={cardsectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>

                <CardSection>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles = {
    cardsectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40

    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
};

export { Confirm };