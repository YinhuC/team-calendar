/* Third Party */
import React from 'react';
import {
  Row, Col, Button, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input,
} from 'reactstrap';
import {ModalStyled} from './style';
import moment from 'moment';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setTimes, setDates} from '../../../redux/actions';


class EventModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
                  onChange={(event) => this.props.setDates(event.target.value, this.props.endDate)}
                  value={this.props.startDate}
                />
              </FormGroup>
              <FormGroup>
                <Label>End Date</Label>
                <Input
                  type="date"
                  name="endDate"
                  onChange={(event) => this.props.setDates(this.props.startDate, event.target.value)}
                  value={this.props.endDate}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label >Start Time</Label>
                <Input
                  type="time"
                  name="startTime"
                  onChange={(event) => this.props.setTimes(event.target.value, this.props.endTime)}
                  value={this.props.startTime}
                />
              </FormGroup>
              <FormGroup>
                <Label>End Time</Label>
                <Input
                  type="time"
                  name="endTime"
                  onChange={(event) => this.props.setTimes(this.props.startTime, event.target.value)}
                  value={this.props.endTime}
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
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  setTimes: PropTypes.func,
  setDates: PropTypes.func,
};
function mapStateToProps(state) {
  return {
    startDate: state.eventModal.startDate,
    endDate: state.eventModal.endDate,
    startTime: state.eventModal.startTime,
    endTime: state.eventModal.endTime,
  };
}
const mapDispatchToProps = {
  setTimes, setDates,
};
export default connect(mapStateToProps, mapDispatchToProps)(EventModal);
