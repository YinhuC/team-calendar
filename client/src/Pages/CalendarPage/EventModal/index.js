/* Third Party */
import React from 'react';
import {
  Row, Col, Button, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input,
} from 'reactstrap';
import {ModalStyled} from './style';
import moment from 'moment';
class EventModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
      event: '',
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
        <ModalHeader>Add New Calendar Event</ModalHeader>
        <ModalBody>
          <Row>
            <Col className="col-12">
              <FormGroup>
                <Label>Name of Event</Label>
                <Input
                  type="text"
                  name="event"
                  placeholder="Name of event"
                  onChange={this.changeInput}
                  value={this.state.event}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label>Start Date</Label>
                <Input
                  type="date"
                  name="startDate"
                  onChange={this.changeInput}
                  value={moment(this.state.startDate).format('YYYY-MM-DD')}
                />
              </FormGroup>
              <FormGroup>
                <Label>End Date</Label>
                <Input
                  type="date"
                  name="endDate"
                  onChange={this.changeInput}
                  value={moment(this.state.endDate).format('YYYY-MM-DD')}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label >Start Time</Label>
                <Input
                  type="time"
                  name="startTime"
                  onChange={this.changeInput}
                  value={moment(this.state.startTime).format('HH:mm')}
                />
              </FormGroup>
              <FormGroup>
                <Label>End Time</Label>
                <Input
                  type="time"
                  name="endTime"
                  onChange={this.changeInput}
                  value={moment(this.state.endTime).format('HH:mm')}
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

export default EventModal;
