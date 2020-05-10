/* Third Party */
import React from 'react';
import {
  Row, Col, Badge, Button, CardBody, Collapse,
} from 'reactstrap';

/* Components */
import {
  DashbaordItem, OuterContainer, InnerContainer, Heading,
  CardImage, ImageContainer, Text, Title, Links, Notifications, Notification,
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
    };
  }

  toggleNotifications = () => {
    this.setState({notificationsOpen: !this.state.notificationsOpen});
  }

  render() {
    const items = [];
    for (let i = 0; i < 1; i++) {
      items.push(
          <Col className="col-4">
            <Links to="/calendar">
              <DashbaordItem>
                <ImageContainer>
                  <CardImage src={image4} alt="Card image cap" />
                </ImageContainer>
                <CardBody>
                  <Title>Team WhiteWolf</Title>
                  <hr />
                  <Text>Incididunt exercitation ex dolor enim excepteur mollit nostrud amet Lorem dolore do sint.</Text>
                </CardBody>
              </DashbaordItem>
            </Links>
          </Col>,
      );
    }

    return (
      <OuterContainer>
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
                    <Notification>
                      Lorem nulla anim laboris voluptate id proident deserunt Lorem eu nisi velit pariatur minim ea.
                    </Notification>
                    <Notification>
                      Fugiat dolor nulla fugiat tempor consectetur cupidatat aliqua.
                    </Notification>
                    <Notification>
                      Fugiat nostrud duis aute id excepteur irure qui irure voluptate ullamco sunt consequat.
                    </Notification>
                    <Notification>
                      Id incididunt nisi consectetur dolor amet cupidatat in exercitation nulla eu reprehenderit esse.
                    </Notification>
                  </Notifications>
                </Collapse>
              </Heading>
            </Col>
          </Row>
          <Row>
            {items}

            <Col className="col-4">
              <Links to="/calendar">
                <DashbaordItem>
                  <ImageContainer>
                    <CardImage src={image2} alt="Card image cap" />
                  </ImageContainer>
                  <CardBody>
                    <Title>Team Potato</Title>
                    <hr />
                    <Text>Quis sit culpa in consequat magna esse exercitation aliqua.</Text>
                  </CardBody>
                </DashbaordItem>
              </Links>
            </Col>

            <Col className="col-4">
              <Links to="/calendar">
                <DashbaordItem>
                  <ImageContainer>
                    <CardImage src={image3} alt="Card image cap" />
                  </ImageContainer>
                  <CardBody>
                    <Title>Team Tesla</Title>
                    <hr />
                    <Text>Dolor magna ipsum mollit commodo anim aute consequat nostrud.</Text>
                  </CardBody>
                </DashbaordItem>
              </Links>
            </Col>

            <Col className="col-4">
              <Links to="/calendar">
                <DashbaordItem>
                  <ImageContainer>
                    <CardImage src={image} alt="Card image cap" />
                  </ImageContainer>
                  <CardBody>
                    <Title>Team One</Title>
                    <hr />
                    <Text>Ipsum id aliquip duis in aute labore excepteur labore aute consequat excepteur.</Text>
                  </CardBody>
                </DashbaordItem>
              </Links>
            </Col>

            <Col className="col-4">
              <Links to="/calendar">
                <DashbaordItem>
                  <ImageContainer>
                    <CardImage src={image5} alt="Card image cap" />
                  </ImageContainer>
                  <CardBody>
                    <Title>Team Tomato</Title>
                    <hr />
                    <Text>
                      Id minim nisi aliquip laborum incididunt sunt ullamco sit ipsum nulla ut veniam proident.
                    </Text>
                  </CardBody>
                </DashbaordItem>
              </Links>
            </Col>
          </Row>
        </InnerContainer>
      </OuterContainer>
    );
  }
}

export default LandingPage;
