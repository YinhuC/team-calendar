/* Third Party */
import React from 'react';
import {
  Row, Col, Badge, Button, CardBody, Collapse,
  ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input,
} from 'reactstrap';

/* Components */
import {
  DashbaordItem, OuterContainer, InnerContainer, Heading,
  CardImage, ImageContainer, Text, Title, Links, Notifications, Notification,
  ModalStyled,
} from './style';
import image from '../Images/1.jpg';
import image2 from '../Images/2.jpg';
import image3 from '../Images/3.jpg';
import image4 from '../Images/4.jpg';
import image5 from '../Images/5.jpg';

/* Functions */

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationsOpen: false,
      description: '',
      name: '',
      groups: [],
    };
  }

  toggleNotifications = () => {
    this.setState({notificationsOpen: !this.state.notificationsOpen});
  }

  componentDidMount() {
    this.fetchGroup();
  }

  createGroup = () => {
    fetch('/api/groups', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        description: this.state.description,
      }),
    }).then((res, err) => {
      if (err) {
        console.log(err);
      } else {
        res.json().then((json) => console.log(json));
      }
      this.fetchGroup();
    });
    this.closeModal();
  }

  fetchGroup = () => {
    fetch('/api/groups').then((res, err) => {
      if (err) {
        console.log(err);
      } else {
        res.json().then((json) => this.setState({
          groups: json,
        }));
      }
    });
  }

  changeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  toggleModal = () =>{
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      description: '',
      name: '',
    });
  }

  closeModal = () =>{
    this.setState({
      isModalOpen: false,
      description: '',
      name: '',
    });
  }

  render() {
    const calendars = [];
    const arrayImages = [image, image2, image3, image4, image5];

    this.state.groups.forEach((group, index) => {
      console.log(group);
      const groupurl = '/calendar/'+group._id;
      calendars.push(
          <Col className="col-4">
            <Links to={groupurl}>
              <DashbaordItem>
                <ImageContainer>
                  <CardImage src={arrayImages[index%5]} alt="Background image" />
                </ImageContainer>
                <CardBody>
                  <Title>{group.name}</Title>
                  <hr />
                  <Text>{group.description}</Text>
                </CardBody>
              </DashbaordItem>
            </Links>
          </Col>,
      );
    });

    const notifications = [];
    const items = [
      'Proident id occaecat incididunt in ullamco duis consectetur excepteur aliquip.',
      'Proident ipsum exercitation commodo ea id occaecat quis sit Lorem est sit ea.',
      'Sint id sit amet et id ut excepteur ex nisi et non anim.',
      'In ea ipsum amet aliquip deserunt cillum nostrud adipisicing et ipsum commodo est ullamco.',
    ];

    items.forEach((item, index) => {
      notifications.push(
          <Notification key={index} color='primary'>
            {item}
          </Notification>,
      );
    });

    return (
      <OuterContainer>

        <ModalStyled size="lg" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Create New Group</ModalHeader>
          <ModalBody>
            <Row>
              <Col className="col-12">
                <FormGroup>
                  <Label>Name of Group Calendar</Label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name of group"
                    onChange={this.changeInput}
                    value={this.state.name}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label >Description</Label>
                  <Input
                    type="textarea"
                    name="description"
                    onChange={this.changeInput}
                    value={this.state.description}
                  />
                </FormGroup>
              </Col>
            </Row>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.createGroup}>Add</Button>
            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
          </ModalFooter>
        </ModalStyled>
        <InnerContainer>
          <Row>
            <Col>
              <Heading>
                Dashboard
                <Button color="primary" outline onClick={this.toggleNotifications}>
                  Notifications <Badge color="secondary">4</Badge>
                </Button>
                <Collapse isOpen={this.state.notificationsOpen}>
                  <Notifications>
                    {notifications}
                  </Notifications>
                </Collapse>
              </Heading>
            </Col>
          </Row>
          <Row>
            {calendars}
            <Col className="col-4">
              <DashbaordItem>
                <Button color="primary" outline onClick={this.toggleModal} style={{flex: 1, borderRadius: 10}}>
                  Create Group
                </Button>
              </DashbaordItem>
            </Col>
          </Row>
        </InnerContainer>
      </OuterContainer>
    );
  }
}

export default LandingPage;
