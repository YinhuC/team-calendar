/* Third Party */
import React from 'react';

/* Components */
import {
  Text,
  SubText,
  FeatureIcon,
  Feature,
  FeatureContainer,
} from './style';
import {Row, Col, Container} from 'reactstrap';
import Calendar from './Icons/calendar.png';
import Simple from './Icons/simple.png';
import Google from './Icons/google.svg';

/* Functions */

function FeatureSection() {
  return (
    <Feature>
      <Container>
        <Row className="d-flex justify-content-center">
          <Col className="col-md-3 col-12">
            <FeatureContainer>
              <FeatureIcon src={Calendar} />
              <Text>Complete</Text>
              <SubText>
                See all of your group members&apos; schedules in one place
              </SubText>
            </FeatureContainer>
          </Col>
          <Col className="col-md-3 col-12">
            <FeatureContainer>
              <FeatureIcon src={Simple} />
              <Text>Simple</Text>
              <SubText>
              Organise a meeting that works for everyone in one click
              </SubText>
            </FeatureContainer>
          </Col>
          <Col className="col-md-3 col-12">
            <FeatureContainer>
              <FeatureIcon src={Google} />
              <Text>Integrated</Text>
              <SubText>
                All your group events are synced to your Google Account
              </SubText>
            </FeatureContainer>
          </Col>
        </Row>
      </Container>
    </Feature>
  );
}

export default FeatureSection;
