/* Third Party */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

/* Components */
import {} from './style';
import {Button} from 'reactstrap';
import {authenticate} from '../../redux/actions';

/* Functions */


class AuthenticationButton extends React.Component {
  componentDidMount() {
    fetch('/api/user_details').then((response) => {
      response.json().then((user) => {
        this.props.authenticate(user.id);
      });
    });
  }

  handleLogin = () => {
    fetch('/api/login').then((response) => {
      response.text().then((url) => {
        window.location.assign(url);
      });
    });
  }

  handleLogout = () => {
    fetch('/api/logout');
    window.location.assign('/');
  }

  render() {
    return (
      <>
        {this.props.authenticated ?
              <Button color={this.props.theme} onClick={this.handleLogout}>
                {this.props.logoutText}
              </Button>:
              <Button color={this.props.theme} onClick={this.handleLogin}>
                {this.props.loginText}
              </Button>}
      </>
    );
  }
}

AuthenticationButton.propTypes = {
  authenticated: PropTypes.bool,
  authenticate: PropTypes.func,
  logoutText: PropTypes.string,
  loginText: PropTypes.string,
  theme: PropTypes.string,
};
AuthenticationButton.defaultProps = {
  theme: 'primary',
};
function mapStateToProps(state) {
  return {
    authenticated: state.authentication.authenticated,
  };
}
const mapDispatchToProps = {
  authenticate,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticationButton);
