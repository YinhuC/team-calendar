/* Third Party */
import React from 'react';
import {Row, Col} from 'reactstrap';
import wolf from '../wolf.svg';
import wolfLight from '../wolf_light.svg';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

/* Components */
import {Center, Logo} from './style';
import AuthenticationButton from '../AuthenticationButton';

/* Functions */

class Header extends React.Component {
  render() {
    return (
      <Center style={!this.props.authenticated?{backgroundColor: '#007bff'}:{}}
        className="d-flex justify-content-around">
        <Row className="mr-5">
          <Col className="align-middle">
            <Logo src={this.props.authenticated? wolf:wolfLight} alt="Logo" />
          </Col>
        </Row>
        <Row><Col></Col></Row>
        <Row className="ml-5">
          <Col className="align-middle">
            <AuthenticationButton theme = {this.props.authenticated ?'primary':'light'}
              loginText="Sign In" logoutText="Logout"/>
          </Col>
        </Row>
      </Center>
    );
  }
}

Header.propTypes = {
  authenticated: PropTypes.bool,
};
function mapStateToProps(state) {
  return {
    authenticated: state.authentication.authenticated,
  };
}

export default connect(mapStateToProps)(Header);
