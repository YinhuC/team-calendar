/* Third Party */
import React from 'react';
import {Row, Col, Button} from 'reactstrap';
import wolf from '../wolf.svg';
import {Link} from 'react-router-dom';

/* Components */
import {Center, Logo} from './style';

/* Functions */

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  toggleLogin = () => {
    console.log('fetch');
    fetch('/api/login').then((response) => {
      response.text().then((url) => {
        window.location.assign(url);
      });
    });
    this.setState({isLoggedIn: !this.state.isLoggedIn});
  }

  render() {
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
            {this.state.isLoggedIn ?
              <Link to="/">
                <Button color="primary" onClick={this.toggleLogin}>
                  Logout
                </Button>
              </Link> :
                <Button color="primary" onClick={this.toggleLogin}>
                  Sign in
                </Button>}
          </Col>
        </Row>
      </Center>
    );
  }
}

export default Header;
