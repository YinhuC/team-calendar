/* Third Party */
import React from 'react';
import {
  Row, Col, Button,
} from 'reactstrap';

import {Link} from 'react-router-dom';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import FullCalendar from '@fullcalendar/react';
import InfiniteCalendar from 'react-infinite-calendar';
import {} from 'react-feather';
import moment from 'moment';
import {connect} from 'react-redux';
import {setTimes, setDates, resetEventModal} from '../../redux/actions';


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
  SmallCalendarContainer,
} from './style';
import EventModal from './EventModal';
import MemberModal from './MemberModal';

/* Functions */

class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarWeekends: true,
      calendarEvents: [],
      eventModal: false,
      memberModal: false,
      title: '',
      members: [],
      userCalendars: [],
      activeCalendars: [],
      events: [],
    };
  }

  calendarComponentRef = React.createRef();

  componentDidMount() {
    const {groupid} = this.props.match.params;
    this.refreshData();
    fetch('/api/calendars/'+groupid).then( (res) => res.json().then( (json) => {
      this.setState({activeCalendars: json.calendars});
    }));
    fetch('/api/calendars/'+groupid+'/events').then( (res) => res.json().then( (json) => {
      // this.setState({events: json.events});
      console.log(json);
    }));
  }

  refreshData() {
    const {groupid} = this.props.match.params;
    fetch('/api/groups/'+groupid).then( (res) => res.json().then( (json) => {
      this.setState({title: json.name});
    }));
    fetch('/api/members/'+groupid).then( (res) => res.json().then( (json) => {
      this.setState({members: json.memberMap});
    }));
    fetch('/api/calendars').then( (res) => res.json().then( (json) => {
      this.setState({userCalendars: json.calendars});
    }));
  }

  toggleEventModal = () =>{
    if (!this.state.eventModal) {
      this.props.resetEventModal();
    }
    this.setState({
      eventModal: !this.state.eventModal,
    });
  }

  toggleMemberModal = () =>{
    this.setState({
      memberModal: !this.state.memberModal,
    });
    this.refreshData();
  }

  toggleDate = (data) =>{
    const calendar = this.calendarComponentRef.current.getApi();
    calendar.gotoDate( moment(data).format('YYYY-MM-DD') );
  }

  selectCallback = (data) => {
    this.toggleEventModal();
    this.props.setDates(
        moment(data.start).format('YYYY-MM-DD'),
        moment(data.end).format('YYYY-MM-DD'),
    );
    this.props.setTimes(
        moment(data.start).format('HH:mm'),
        moment(data.end).format('HH:mm'),
    );
  };
  componentDidUpdate() {
    const {groupid} = this.props.match.params;
    fetch('/api/calendars/'+groupid, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({calendars: this.state.activeCalendars}),
    }).then( (err) => console.log(err));
  }
  onItemClick = (event) =>{
    const calendarId = event.target.value;
    if (this.state.activeCalendars.includes(calendarId)) {
      this.setState((prev) => ({
        activeCalendars: prev.activeCalendars.filter((id)=> id !== calendarId),
      }));
    } else {
      this.setState((prev) => ({
        activeCalendars: [...prev.activeCalendars, calendarId],
      }));
    }
  }

  render() {
    const calendarsItems = [];
    this.state.userCalendars.map((calendar) => {
      const isActive = this.state.activeCalendars.includes(calendar.id);
      calendarsItems.push(
          <Item tag='button' key={calendar.id} className={isActive?'active':''}
            onClick={this.onItemClick} value={calendar.id}>
            {calendar.name}
          </Item>,
      );
    });

    const membersItems = [];
    for (let i = 0; i < this.state.members.length; i++) {
      membersItems.push(
          <Item key={'u' + i}>
            {this.state.members[i].firstName}
          </Item>,
      );
    }


    // const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    const {groupid} = this.props.match.params;
    return (
      <OuterContainer>
        <EventModal isOpen={this.state.eventModal} toggle={this.toggleEventModal}/>
        <MemberModal isOpen={this.state.memberModal} toggle={this.toggleMemberModal} groupid={groupid}/>

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
  setTimes: PropTypes.func,
  setDates: PropTypes.func,
  resetEventModal: PropTypes.func,
};
const mapDispatchToProps = {
  setTimes, setDates, resetEventModal,
};
export default connect(null, mapDispatchToProps)(CalendarPage);
