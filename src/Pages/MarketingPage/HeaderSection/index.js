/* Third Party */
import React from "react";

/* Components */
import { Header, HeaderText, SubText, HeaderImage } from "./style";
import { Row, Col, Container, Button } from "reactstrap";
import Calendar from "../../Images/calendar.jpg";
import { Link } from "react-router-dom";

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
            <Link to="/landing">
              <Button color="primary">Sign Up & Start&nbsp;&nbsp;></Button>
            </Link>
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
