/* Third Party */
import React from 'react';
import {
  Row, Col, Button, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input,
} from 'reactstrap';
import {ModalStyled} from './style';
import PropTypes from 'prop-types';

class EventModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      member: '',
      email: '',
    };
  }
  changeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  render() {
    return (
      <ModalStyled size="lg" isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <ModalHeader>Add New Member</ModalHeader>
        <ModalBody>
          <Row>
            <Col className="col-12">
              <FormGroup>
                <Label>Name of Member</Label>
                <Input
                  type="text"
                  name="member"
                  placeholder="Name of member"
                  onChange={this.changeInput}
                  value={this.state.member}
                />
              </FormGroup>
              <FormGroup>
                <Label>Email of Member</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Name of event"
                  onChange={this.changeInput}
                  value={this.state.email}
                />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.toggle}>Add</Button>
          <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
        </ModalFooter>
      </ModalStyled>);
  }
}
EventModal.propTypes = {
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
};
export default EventModal;
