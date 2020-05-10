/* Third Party */
import React from 'react';

/* Components */
import {Header, HeaderText, SubText, HeaderImage} from './style';
import {Row, Col, Container} from 'reactstrap';
import Calendar from '../../Images/calendar.jpg';

/* Functions */

function DetailSection() {
  return (
    <Container>
      <Header>
        <Row>
          <Col>
            <HeaderImage src={Calendar} />
          </Col>
          <Col>
            <HeaderText>
              Find Availability Of Your Group In A Single Click
            </HeaderText>
            <SubText>
              Officia culpa consectetur occaecat sunt ullamco eiusmod ipsum
              nulla deserunt dolor cupidatat dolore. Excepteur deserunt fugiat
              esse pariatur mollit aliquip.
            </SubText>
          </Col>
        </Row>
      </Header>
      <Header>
        <Row>
          <Col>
            <HeaderText>
              Find Availability Of Your Group In A Single Click
            </HeaderText>
            <SubText>
              Officia culpa consectetur occaecat sunt ullamco eiusmod ipsum
              nulla deserunt dolor cupidatat dolore. Excepteur deserunt fugiat
              esse pariatur mollit aliquip.
            </SubText>
          </Col>
          <Col>
            <HeaderImage src={Calendar} />
          </Col>
        </Row>
      </Header>
    </Container>
  );
}

export default DetailSection;
