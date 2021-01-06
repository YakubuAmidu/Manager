import _, {map} from 'lodash';
import React, {Component} from 'react';
import communications from 'react-native-communications';
import {connect} from 'react-redux';
import EmployeeForm from './EmployeeForm';
import {employeeUpdate, employeeSave} from '../actions';
import {Card, CardSection, Input} from './common';

class EmployeeEdit extends Component {
  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({props, value});
    });
  }

  onButtonPress() {
    const {name, phone, shift} = this.props;

    this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
  }

  onTextPress() {
    const {phone, shift} = this.props;

    communications.text(phone, `Your up coming shift is on ${shift}`);
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save changes</Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>Text Schedule</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const {name, phone, shift} = this.EmployeeForm;

  return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate, employeeSave})(
  EmployeeEdit,
);
