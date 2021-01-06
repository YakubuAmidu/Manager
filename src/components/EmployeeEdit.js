import React, {Component} from 'react';
import {connect} from 'react-redux';
import EmployeeForm from './EmployeeForm';
import {Card, CardSection, Input} from './common';

class EmployeeEdit extends Component {
  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button>Save changes</Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(null, {})(EmployeeEdit);
