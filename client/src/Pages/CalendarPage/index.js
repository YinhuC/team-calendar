/* Third Party */
import React from 'react';
import {
  Row, Col, Button, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input,
} from 'reactstrap';

import {Link} from 'react-router-dom';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import InfiniteCalendar from 'react-infinite-calendar';
import {} from 'react-feather';
import moment from 'moment';


// must manually import the stylesheets for each plugin
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import 'react-infinite-calendar/styles.css';
import PropTypes from 'prop-types';


/* Components */
import {OuterContainer, LeftContainer, Heading,
  RightContainer, Group, Member, List, Item, Subheader,
  OuterCalendarContainer, Add, CalendarContainer,
  SmallCalendarContainer, ModalStyled,
} from './style';


/* Functions */

class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarWeekends: true,
      calendarEvents: [],
      eventModal: false,
      memberModal: false,
      startDate: '',
      startTime: '',
      endDate: '',
      endTime: '',
      event: '',
      member: '',
      email: '',
      title: 'Calendar',
      members: [],
    };
  }

  calendarComponentRef = React.createRef();

  componentDidMount() {
    const {groupid} = this.props.match.params;
    console.log(groupid);
    fetch('/api/groups/'+groupid).then( (res) => res.json().then( (json) => {
      this.setState({
        members: json.members,
        title: json.name,
      });
    }));
  }

  handleDateClick = (arg) => {
    if (true) {
      this.setState({
        calendarEvents: this.state.calendarEvents.concat({
          title: 'New Event',
          start: arg.date,
          allDay: arg.allDay,
          end: arg.date,
        }),
      });
    }
  };

  toggleEventModal = () =>{
    this.setState({
      eventModal: !this.state.eventModal,
    });
  }

  toggleMemberModal = () =>{
    this.setState({
      memberModal: !this.state.memberModal,
    });
  }

  toggleDate = (data) =>{
    const calendar = this.calendarComponentRef.current.getApi();
    calendar.gotoDate( moment(data).format('YYYY-MM-DD') );
  }

  selectCallback = (data) => {
    this.toggleEventModal();
    this.setState({
      startDate: data.start,
      startTime: data.start,
      endDate: data.end,
      endTime: data.end,
    });
    // Send to Google
    if (false) {
      this.setState({
        calendarEvents: this.state.calendarEvents.concat({
          title: 'New Event',
          start: data.start,
          allDay: data.allDay,
          end: data.end,
        }),
      });
    }
  };

  changeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    const calendars = ['Google Calendar', 'Outlook Calendar', 'UoA Calendar'];
    const calendarsItems = [];
    for (let i = 0; i < 3; i++) {
      calendarsItems.push(
          <Item key={'c' + i}>
            {calendars[i]}
          </Item>,
      );
    }

    const membersItems = [];
    for (let i = 0; i < this.state.members.length; i++) {
      membersItems.push(
          <Item key={'u' + i}>
            {this.state.members[i]}
          </Item>,
      );
    }


    // const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

    return (
      <OuterContainer>

        <ModalStyled size="lg" isOpen={this.state.eventModal} toggle={this.toggleEventModal}>
          <ModalHeader toggle={this.toggleEventModal}>Add New Calendar Event</ModalHeader>
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
            <Button color="primary" onClick={this.toggleEventModal}>Add</Button>
            <Button color="secondary" onClick={this.toggleEventModal}>Cancel</Button>
          </ModalFooter>
        </ModalStyled>

        <ModalStyled size="lg" isOpen={this.state.memberModal} toggle={this.toggleMemberModal}>
          <ModalHeader toggle={this.toggleMemberModal}>Add New Member</ModalHeader>
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
            <Button color="primary" onClick={this.toggleMemberModal}>Add</Button>
            <Button color="secondary" onClick={this.toggleMemberModal}>Cancel</Button>
          </ModalFooter>
        </ModalStyled>

        <LeftContainer>
          <Row>
            <Col className="d-flex justify-content-center align-items-start my-3">
              <Link to="/landing">
                <Button color="primary" onClick={this.toggleLogin}>
                  &lt; Back to Dashbaord
                </Button>
              </Link>
            </Col>
            <Col>
              <SmallCalendarContainer>
                <InfiniteCalendar
                  width={280}
                  height={280}
                  onSelect={this.toggleDate}
                />
              </SmallCalendarContainer>
            </Col>
            <Col className="col-12">
              <Subheader>Calendars</Subheader>
              <Group>
                <List>
                  {calendarsItems}
                </List>
              </Group>
            </Col>
            <Col className="col-12 mt-5 mb-1 d-flex flex-row justify-content-between align-items-center">
              <Subheader>Members</Subheader>
              <Button color="primary" onClick={this.toggleMemberModal}>Add Members</Button>
            </Col>
            <Col className="col-12">
              <Member>
                <List>
                  {membersItems}
                </List>
              </Member>
            </Col>
          </Row>
        </LeftContainer>
        <RightContainer>
          <OuterCalendarContainer>
            <Row>
              <Col className="col-12 d-flex space-between align-items-center">
                <Heading>
                  {this.state.title}
                </Heading>
                <Add color="primary" onClick={this.toggleEventModal}>
                  + Add Event
                </Add>
              </Col>
              <Col className="col-12">
                <CalendarContainer>
                  <FullCalendar
                    defaultView="timeGridWeek"
                    header={{
                      left: 'prev,next today',
                      center: 'title',
                      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
                    }}
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    ref={this.calendarComponentRef}
                    weekends={this.state.calendarWeekends}
                    events={this.state.calendarEvents}
                    dateClick={this.handleDateClick}
                    selectable= {true}
                    selectMirror= {true}
                    select = {this.selectCallback}
                  />
                </CalendarContainer>
              </Col>
            </Row>
          </OuterCalendarContainer>
        </RightContainer>
      </OuterContainer>
    );
  }
}

CalendarPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      groupid: PropTypes.string,
    }),
  }),
};

export default CalendarPage;
