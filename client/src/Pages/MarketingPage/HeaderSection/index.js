/* Third Party */
import React from 'react';

/* Components */
import {Header, HeaderText, SubText, HeaderImage} from './style';
import {Row, Col, Container} from 'reactstrap';
import Calendar from '../../Images/calendar.jpg';
import AuthenticationButton from '../../../Components/AuthenticationButton';


/* Functions */

function HeaderSection() {
  return (
    <Container>
      <Row>
        <Col>
          <Header>
            <HeaderText>
              Find Availability Of Your Group In A Single Click
            </HeaderText>
            <SubText>
              Officia culpa consectetur occaecat sunt ullamco eiusmod ipsum
              nulla deserunt dolor cupidatat dolore. Excepteur deserunt fugiat
              esse pariatur mollit aliquip.
            </SubText>
            <AuthenticationButton loginText="Sign Up & Start&nbsp;&nbsp;&gt;"/>
          </Header>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <HeaderImage src={Calendar} />
        </Col>
      </Row>
    </Container>
  );
}

export default HeaderSection;
