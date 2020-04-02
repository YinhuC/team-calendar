/* Third Party */
import React from "react";

/* Components */
import {
  Header,
  Text,
  SubText,
  FeatureIcon,
  Feature,
  FeatureContainer
} from "./style";
import { Row, Col, Container } from "reactstrap";
import Calendar from "./Icons/calendar.svg";
import Fast from "./Icons/fast.svg";
import Report from "./Icons/report.svg";

/* Functions */

function FeatureSection() {
  return (
    <Feature>
      <Container>
        <Row>
          <Col>
            <Header>Special Features</Header>
          </Col>
        </Row>
        <Row>
          <Col>
            <FeatureContainer>
              <FeatureIcon src={Calendar} />
              <Text>Calendar</Text>
              <SubText>
                Every single event of every single group member in one place to
                find the available times
              </SubText>
            </FeatureContainer>
          </Col>
          <Col>
            <FeatureContainer>
              <FeatureIcon src={Fast} />
              <Text>Fast</Text>
              <SubText>
                With a single click, find every single avaiable spot and time
                that you can meet up with your group members
              </SubText>
            </FeatureContainer>
          </Col>
          <Col>
            <FeatureContainer>
              <FeatureIcon src={Report} />
              <Text>Analytics</Text>
              <SubText>
                Analytics provide a easy way to see the progress that your group
                has made and all vital information
              </SubText>
            </FeatureContainer>
          </Col>
        </Row>
      </Container>
    </Feature>
  );
}

export default FeatureSection;
