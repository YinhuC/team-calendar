/* Third Party */
import React from 'react';

/* Components */
import {Logo, FooterContainer} from './style';
import {Container, Row, Col} from 'reactstrap';
import wolf from '../white_text.png';

/* Functions */

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Row>
          <Col className="col-12 col-md-6 d-flex justify-content-center">
            <Logo src={wolf} alt="Logo" />
          </Col>
          <Col className="col-12 col-md-6 pl-5 d-flex justify-content-center align-items-center">
            <h3>This web application was designed for a group project in Semester One 2020 at
            the University of Auckland.</h3>
          </Col>
        </Row>
      </Container>
      <hr style={{backgroundColor: 'white'}}/>
      <Container>
        <Row>
          <Col className="mb-3">
            © 2020 GroupCalendar. Developed by Team White Wolf
          </Col>
        </Row>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
