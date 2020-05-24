/* Third Party */
import React from 'react';
import {
  Row, Col, Button, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input,
} from 'reactstrap';
import {ModalStyled} from './style';
import PropTypes from 'prop-types';

class MemberModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }


  changeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  addMember = () => {
    const {groupid} = this.props;
    fetch('/api/groups/'+groupid, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
      }),
    }).then((res, err) => {
      if (err) {
        console.log(err);
      }
      if (res.status === 404) {
        alert('User not found.');
      }
      this.props.refresh();
    });
    this.props.toggle();
    this.closeModal();
  }

  closeModal = () => {
    this.setState({
      email: '',
    });
    this.props.toggle();
  }

  render() {
    return (
      <ModalStyled size="lg" isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <ModalHeader toggle={this.closeModal}>Add New Member</ModalHeader>
        <ModalBody>
          <Row>
            <Col className="col-12">
              <FormGroup>
                <Label>New Member Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter email address here"
                  onChange={this.changeInput}
                  value={this.state.email}
                />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.addMember}>Add</Button>
          <Button color="secondary" onClick={this.closeModal}>Cancel</Button>
        </ModalFooter>
      </ModalStyled>);
  }
}
MemberModal.propTypes = {
  groupid: PropTypes.string,
  toggle: PropTypes.func,
  isOpen: PropTypes.bool,
  refresh: PropTypes.func,
};
export default MemberModal;
