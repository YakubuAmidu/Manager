import _, {map} from 'lodash';
import React, {Component} from 'react';
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

const mapStateToProps = (state) => {
  const {name, phone, shift} = this.EmployeeForm;

  return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate, employeeSave})(
  EmployeeEdit,
);
