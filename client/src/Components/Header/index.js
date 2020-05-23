/* Third Party */
import React from 'react';
import {Row, Col} from 'reactstrap';
import wolfDark from '../wolf_dark.svg';
import wolfLight from '../wolf_light.svg';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

/* Components */
import {Center, Logo} from './style';
import AuthenticationButton from '../AuthenticationButton';

/* Functions */

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      marketingPage: {backgroundColor: '#007bff', position: 'fixed', top: '0',
        boxShadow: 'none'},
      scroll: false,
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const backgroundcolor = window.scrollY < 10 ? '#007bff' : 'white';
      const shadow = window.scrollY < 10 ? 'none' : '2px 2px 10px grey';
      const scrolling = window.scrollY < 10 ? false: true;
      this.setState({
        marketingPage: {backgroundColor: backgroundcolor, boxShadow: shadow, position: 'fixed', top: '0'},
        scroll: scrolling,
      });
    });
  }

  render() {
    return (
      <Center style={!this.props.authenticated? this.state.marketingPage :{}}
        className="d-flex justify-content-around">
        <Row className="mr-5">
          <Col className="align-middle">
            <Logo src={this.props.authenticated || this.state.scroll ? wolfDark:wolfLight} alt="Logo" />
          </Col>
        </Row>
        <Row><Col></Col></Row>
        <Row className="ml-5">
          <Col className="align-middle">
            <AuthenticationButton theme = {this.props.authenticated || this.state.scroll ?'primary':'light'}
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
