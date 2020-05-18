/* Third Party */
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

/* Components */
import Marketing from './Pages/MarketingPage';
import Landing from './Pages/LandingPage';
import Error from './Pages/ErrorPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Calendar from './Pages/CalendarPage';

/* Functions */

class Main extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              {this.props.authenticated ?
              <Redirect to='/landing' /> :
                            <Marketing />}
              <Footer />
            </Route>
            <Route path="/landing">
              <Landing />
            </Route>
            <Route path="/calendar/:groupid" component={Calendar}/>
            <Route path="*">
              <Error />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

Main.propTypes = {
  authenticated: PropTypes.bool,
};
function mapStateToProps(state) {
  return {
    authenticated: state.authentication.authenticated,
  };
}

export default connect(mapStateToProps)(Main);
