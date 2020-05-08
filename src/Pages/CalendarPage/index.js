/* Third Party */
import React from "react";
import {
  Row, Col
} from 'reactstrap';

/* Components */
import { OuterContainer, InnerContainer, Heading } from "./style";


/* Functions */

class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {

    return (
      <OuterContainer>
        <InnerContainer>
          <Row>
            <Col>
              <Heading>
                Calendar
              </Heading>
            </Col>
          </Row>
        </InnerContainer>
      </OuterContainer>
    )
  }
}

export default CalendarPage;
