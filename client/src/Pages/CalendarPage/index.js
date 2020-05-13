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

// must manually import the stylesheets for each plugin
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import 'react-infinite-calendar/styles.css';


/* Components */
import {OuterContainer, LeftContainer, Heading,
  RightContainer, Group, Member, List, Item, Subheader,
  OuterCalendarContainer, AddEvent, CalendarContainer,
  SmallCalendarContainer, ModalStyled,
} from './style';


/* Functions */

class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarWeekends: true,
      calendarEvents: [],
      isModalOpen: false,
    };
  }

  calendarComponentRef = React.createRef();

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

  toggleModal = () =>{
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  selectCallback = (data) => {
    this.toggleModal();
    if (false) {
      this.setState({
        // add new event data
        calendarEvents: this.state.calendarEvents.concat({
          // creates a new array
          title: 'New Event',
          start: data.start,
          allDay: data.allDay,
          end: data.end,
        }),
      });
    }
  };


  render() {
    const calendars = ['Google Calendar', 'Outlook Calendar', 'UoA Calendar'];
    const calendarsItems = [];
    for (let i = 0; i < 3; i++) {
      calendarsItems.push(
          <Item>
            {calendars[i]}
          </Item>,
      );
    }

    const members = ['Hideaki', 'Soumith', 'Yinhu', 'Andrew', 'Gerald'];
    const membersItems = [];
    for (let i = 0; i < 5; i++) {
      membersItems.push(
          <Item>
            {members[i]}
          </Item>,
      );
    }

    const today = new Date();
    const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

    return (
      <OuterContainer>
        <ModalStyled size="lg" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Add New Calendar Event</ModalHeader>
          <ModalBody>

            <FormGroup>
              <Label>Name of Event</Label>
              <Input
                type="text"
                name="name"
                placeholder="date placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label>Start Date</Label>
              <Input
                type="date"
                name="date"
                placeholder="date placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label >End Time</Label>
              <Input
                type="time"
                name="time"
                placeholder="time placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label>End Date</Label>
              <Input
                type="date"
                name="date"
                placeholder="date placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleTime">End Time</Label>
              <Input
                type="time"
                name="time"
                placeholder="time placeholder"
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModal}>Add</Button>
            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
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
                  selected={today}
                  minDate={lastWeek}
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
            <Col className="col-12">
              <Subheader>Members</Subheader>
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
                Calendar
                </Heading>
                <AddEvent color="primary" onClick={this.toggleModal}>
                  + Add Event
                </AddEvent>
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

export default CalendarPage;
