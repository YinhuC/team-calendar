/* Third Party */
import React from 'react';
import {Row, Col} from 'reactstrap';
import wolf from '../wolf.svg';

/* Components */
import {Center, Logo} from './style';
import AuthenticationButton from '../AuthenticationButton';

/* Functions */

class Header extends React.Component {
  render() {
    return (
      <Center className="d-flex justify-content-around">
        <Row className="mr-5">
          <Col className="align-middle">
            <Logo src={wolf} alt="Logo" />
          </Col>
        </Row>
        <Row><Col></Col></Row>
        <Row className="ml-5">
          <Col className="align-middle">
            <AuthenticationButton loginText="Sign In" logoutText="Logout"/>
          </Col>
        </Row>
      </Center>
    );
  }
}


export default Header;
