/* Third Party */
import React from 'react';
import {
  Row, Col, Button, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input,
} from 'reactstrap';
import {ModalStyled} from './style';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setTimes, setDates, setTitle} from '../../../redux/actions';
import moment from 'moment';
import {Trash2} from 'react-feather';


class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  editEvent = () => {
    const event = {
      summary: this.props.title,
      start: {
        dateTime: moment(`${this.props.startDate}-${this.props.startTime}`, 'YYYY-MM-DD-HH:mm').toISOString(),
      },
      end: {
        dateTime: moment(`${this.props.endDate}-${this.props.endTime}`, 'YYYY-MM-DD-HH:mm').toISOString(),
      },
    };
    fetch(`/api/calendars/${this.props.groupid}/events/${this.props.id}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({event: event}),
    }).then((res, err) => {
      if (err) {
        console.log(err);
      }
      this.props.refresh();
    });
    this.closeModal();
  }

  closeModal = () =>{
    this.props.toggle();
    this.props.setTitle(
        '',
    );
  }

  render() {
    return (
      <ModalStyled size="lg" isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <ModalHeader toggle={this.props.toggle} >
          <span style={{display: 'flex', flexWrap: 'nowrap'}}>
            <span className="mr-1" >
            Edit Calendar Event
            </span>
            <Button color="clear" style={{padding: '0', display: 'flex', alignItems: 'center'}}>
              <Trash2 size={25}/>
            </Button>
          </span>
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col className="col-12">
              <FormGroup>
                <Label>Name of Event</Label>
                <Input
                  type="text"
                  name="event"
                  placeholder="Name of event"
                  onChange={(event) => this.props.setTitle(event.target.value, this.props.title)}
                  value={this.props.title}
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
          <Button color="primary" onClick={this.editEvent}>Save</Button>
          <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
        </ModalFooter>
      </ModalStyled>);
  }
}
EditModal.propTypes = {
  toggle: PropTypes.func,
  refresh: PropTypes.func,
  isOpen: PropTypes.bool,
  groupid: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  setTimes: PropTypes.func,
  setDates: PropTypes.func,
  title: PropTypes.string,
  setTitle: PropTypes.func,
  id: PropTypes.string,
};
function mapStateToProps(state) {
  return {
    startDate: state.eventModal.startDate,
    endDate: state.eventModal.endDate,
    startTime: state.eventModal.startTime,
    endTime: state.eventModal.endTime,
    title: state.eventModal.title,
    id: state.eventModal.id,
  };
}
const mapDispatchToProps = {
  setTimes, setDates, setTitle,
};
export default connect(mapStateToProps, mapDispatchToProps)(EditModal);
