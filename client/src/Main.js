/* Third Party */
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Spinner} from 'reactstrap';

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
          {this.props.loadingAuth ?
          <div className="d-flex justify-content-center pt-5 mt-5">
            <Spinner color="primary" style={{width: '10rem', height: '10rem'}} /> </div>:
          <Switch>
            <Route exact path="/">
              {this.props.authenticated?
              <Redirect to='/landing' /> :
                            <Marketing />}
              <Footer />
            </Route>
            <Route path="/landing">
              {this.props.authenticated?
                <Landing /> :
                <Redirect to='/' />}
            </Route>
            {this.props.authenticated?
            <Route path="/calendar/:groupid" component={Calendar}/>:
            <Route path="/calendar"><Redirect to='/' /></Route>
            }
            <Route path="*">
              <Error />
            </Route>
          </Switch>}
        </Router>
      </>
    );
  }
}

Main.propTypes = {
  authenticated: PropTypes.bool,
  loadingAuth: PropTypes.bool,
};
function mapStateToProps(state) {
  return {
    authenticated: state.authentication.authenticated,
    loadingAuth: state.authentication.loadingAuth,
  };
}

export default connect(mapStateToProps)(Main);
