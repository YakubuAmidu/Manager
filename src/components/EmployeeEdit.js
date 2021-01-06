import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import EmployeeForm from './EmployeeForm';
import {employeeUpdate} from '../actions';
import {Card, CardSection, Input} from './common';

class EmployeeEdit extends Component {
  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({props, value});
    });
  }

  onButtonPress() {
    const {name, phone, shift} = this.props;

    console.log(name, phone, shift);
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save changes</Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(null, {employeeUpdate})(EmployeeEdit);
