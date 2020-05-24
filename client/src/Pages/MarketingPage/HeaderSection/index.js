/* Third Party */
import React from 'react';

/* Components */
import {Header, HeaderText, SubText, HeaderImage, Wave, InnerContainer} from './style';
import {Row, Col, Container} from 'reactstrap';
import Calendar from '../../Images/calendar.png';
import AuthenticationButton from '../../../Components/AuthenticationButton';


/* Functions */

function HeaderSection() {
  return (
    <>
      <InnerContainer>
        <Container>
          <Row>
            <Col>
              <Header>
                <HeaderText>
                  The Calendar With Everyone, For Everyone
                </HeaderText>
                <SubText className="d-none d-md-flex">
                  Gain access to the schedule of your group and
                  create events which are integrated with Google Calendars.
                </SubText>
                <AuthenticationButton theme='light' loginText="Sign Up & Start&nbsp;&nbsp;&gt;"/>
              </Header>
            </Col>
          </Row>
        </Container>
      </InnerContainer>
      <Wave/>

      <Container>
        <Row>
          <Col className="d-flex justify-content-center ">
            <HeaderImage src={Calendar} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HeaderSection;
