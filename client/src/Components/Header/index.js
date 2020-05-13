/* Third Party */
import React from 'react';
import {Row, Col, Button} from 'reactstrap';
import wolf from '../wolf.svg';

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
  componentDidMount() {
    fetch('/api/user_details').then((response) => {
      response.json().then((user) => {
        this.setState({isLoggedIn: user.id});
      });
    });
  }

  handleLogin = () => {
    console.log('fetch');
    fetch('/api/login').then((response) => {
      response.text().then((url) => {
        window.location.assign(url);
      });
    });
  }

  handleLogout = () => {
    console.log('fetch');
    fetch('/api/logout');
    window.location.assign('/');
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
              <Button color="primary" onClick={this.handleLogout}>
                Logout
              </Button>:
              <Button color="primary" onClick={this.handleLogin}>
                Sign in
              </Button>}
          </Col>
        </Row>
      </Center>
    );
  }
}

export default Header;
