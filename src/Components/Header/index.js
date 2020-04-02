/* Third Party */
import React from "react";
import { Row, Col, Button } from "reactstrap";
import wolf from "../wolf.svg";
import { Link } from "react-router-dom";

/* Components */
import { Center, Logo } from "./style";

/* Functions */

function Header() {
  return (
    <Center className="d-flex justify-content-around">
      <Row className="mr-5">
        <Col className="align-middle">
          <Logo src={wolf} alt="Logo" />
        </Col>
      </Row>
      <Row>Some links</Row>
      <Row className="ml-5">
        <Col className="align-middle">
          <Link to="/landing">
            <Button color="primary">Sign In</Button>
          </Link>
        </Col>
      </Row>
    </Center>
  );
}

export default Header;
