/* Third Party */
import React from 'react';

/* Components */
import {Header, HeaderText, SubText, HeaderImage, Wave, HeaderTop} from './style';
import {Row, Col, Container} from 'reactstrap';
import Calendar from '../../Images/calendar.jpg';

/* Functions */

function DetailSection() {
  return (
    <>
      <HeaderTop>
        <Container>

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
        </Container>

      </HeaderTop>
      <Container>
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
      <Wave/>
    </>
  );
}

export default DetailSection;
