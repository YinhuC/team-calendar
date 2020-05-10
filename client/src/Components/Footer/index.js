/* Third Party */
import React from 'react';

/* Components */
import {Logo, FooterContainer} from './style';
import {Container, Row, Col} from 'reactstrap';
import wolf from '../wolf.svg';

/* Functions */

function Footer() {
  return (
    <FooterContainer>
      <Container className="mb-5">
        <Row>
          <Col>
            <Logo src={wolf} alt="Logo" />
            <p>White Wolf</p>
          </Col>
          <Col>
            <h3>Useful Links</h3>
            <ul>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </Col>
          <Col>
            <h3>Useful Links</h3>
            <ul>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <hr />
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
