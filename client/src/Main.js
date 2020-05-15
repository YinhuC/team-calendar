/* Third Party */
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
              <Marketing />
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
export default Main;
