import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communications from 'react-native-communications';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from './../actions';
import { Card, CardSection, Button, Confirm } from './common';

class EmployeeEdit extends Component {
    state = {
        showModal: false
    };

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onTextPress() {
        const { phone, shift } = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    onAccept() {
        this.props.employeeDelete({ uid: this.props.employee.uid });
    }

    render() {
        return (
            <Card>
                <EmployeeForm { ...this.props } />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: true })}>Fire Employee</Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to fire him/her?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift };
};

export default connect(mapStateToProps, {
    employeeUpdate,
    employeeSave,
    employeeDelete
})(EmployeeEdit);