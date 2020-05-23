/* Third Party */
import React from 'react';

/* Components */
import {HeaderBottom, HeaderText, SubText, HeaderImage, Wave, HeaderTop} from './style';
import {Row, Col, Container} from 'reactstrap';
import Calendar from '../../Images/calendar.jpg';

/* Functions */

function DetailSection() {
  return (
    <>
      <HeaderTop>
        <Container>
          <Row>
            <Col className="col-12 col-lg-6 mb-4 mt-xl-5 order-1 order-lg-2">
              <HeaderImage src={Calendar} />
            </Col>
            <Col className="col-12 col-lg-6 mt-xl-5 order-2 order-lg-1">
              <HeaderText>
              Create Groups
              </HeaderText>
              <SubText>
              Sign in with your Google Account and create your group with a
              single click!
              </SubText>
            </Col>
          </Row>
        </Container>
      </HeaderTop>

      <HeaderBottom>
        <Container>
          <Row>
            <Col className="col-12 col-lg-6 order-2">
              <HeaderText>
              Add Members
              </HeaderText>
              <SubText>
              Type in your members Gmail Address and instanly add them
              to the group!
              </SubText>
            </Col>
            <Col className="col-12 col-lg-6 mb-4">
              <HeaderImage src={Calendar} />
            </Col>
          </Row>
        </Container>
      </HeaderBottom>

      <HeaderTop>
        <Container>
          <Row>
            <Col className="col-12 col-lg-6 mb-4 order-1 order-lg-2">
              <HeaderImage src={Calendar} />
            </Col>
            <Col className="col-12 col-lg-6 mt-xl-5 order-2 order-lg-1">
              <HeaderText>
              Choose What To Share
              </HeaderText>
              <SubText>
                Select which if your Google Calendars you want to share
                with your group!
              </SubText>
            </Col>
          </Row>
        </Container>
      </HeaderTop>

      <HeaderBottom>
        <Container>
          <Row>
            <Col className="col-12 col-lg-6 mb-4">
              <HeaderImage src={Calendar} />
            </Col>
            <Col className="col-12 col-lg-6 mt-xl-5">
              <HeaderText>
              Schedule Meetings
              </HeaderText>
              <SubText>
                Select on the calendar to invite everyone to your meeting!
              </SubText>
            </Col>
          </Row>
        </Container>
      </HeaderBottom>
      <Wave/>
    </>
  );
}

export default DetailSection;
