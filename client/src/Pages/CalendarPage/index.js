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
import {MoreVertical} from 'react-feather';
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
  SmallCalendarContainer, Menu,
} from './style';
import EventModal from './EventModal';
import MemberModal from './MemberModal';
import randomColour from '../../Util/random-colour';


/* Functions */

class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
      calendarWeekends: true,
      calendarEvents: [],
      eventModal: false,
      memberModal: false,
      title: '',
      members: [],
      userCalendars: [],
      activeCalendars: [],
    };
  }

  calendarComponentRef = React.createRef();

  componentDidMount() {
    const {groupid} = this.props.match.params;
    this.refreshData();
    fetch('/api/calendars/'+groupid).then( (res) => res.json().then( (json) => {
      this.setState({activeCalendars: json.calendars});
    }));
  }
  refereshEvents() {
    const {groupid} = this.props.match.params;
    const view = this.calendarComponentRef.current.getApi().view;
    const start = moment(view.activeStart).subtract(5, 'weeks').toISOString();
    const end = moment(view.activeEnd).add(5, 'weeks').toISOString();
    console.log(start);
    console.log(end);
    fetch('/api/calendars/'+groupid+'/events?start='+start+'&end='+end).then( (res) => res.json().then( (json) => {
      const events = [];
      json.result.sort((a, b) => (a.googleId > b.googleId) ? 1 : -1).map((item, index) => {
        const userColour = randomColour(item.googleId);
        item.events.map((event) => {
          events.push({
            title: event.summary,
            start: event.startDate,
            end: event.endDate,
            backgroundColor: userColour.fill,
            borderColor: userColour.fill,
            textColor: userColour.text,
          });
        });
      });
      this.setState({calendarEvents: events});
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
    this.refereshEvents();
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
    });
    if (this.state.update) {
      this.refereshEvents();
      this.setState({update: false});
    }
  }

  triggerUpdate = () => {
    return new Promise((resolve) => {
      this.setState({update: true});
      resolve();
    });
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

  menuToggle() {
    console.log('testing menu button');
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
          <Item className='d-flex justify-content-between' key={'u' + i}>
            {this.state.members[i].firstName}
            <Menu onClick={this.menuToggle}>
              <MoreVertical size={20}/>
            </Menu>
          </Item>,
      );
    }


    // const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    const {groupid} = this.props.match.params;
    return (
      <OuterContainer>
        <EventModal isOpen={this.state.eventModal} toggle={this.toggleEventModal} groupid={groupid}
          refresh={this.triggerUpdate}/>
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
                    datesRender = {this.triggerUpdate}
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
