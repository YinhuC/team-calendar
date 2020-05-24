/* Third Party */
import React from 'react';

/* Components */
import {Header, HeaderText, SubText, HeaderImage, Wave, InnerContainer} from './style';
import {Row, Col, Container} from 'reactstrap';
import Calendar from '../../Images/calendar.png';
import CalendarMobile from '../../Images/calendar_mobile.png';
import AuthenticationButton from '../../../Components/AuthenticationButton';
import {useState, useEffect} from 'react';

/* Functions */
function useWindowSize() {
  function getSize() {
    return {
      width: window.innerWidth,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
function HeaderSection() {
  const size = useWindowSize();
  return (
    <>
      <InnerContainer>
        <Container>
          <Row>
            <Col>
              <Header>
                <HeaderText>
                  The Calendar With Everyone, For Everyone
                </HeaderText>
                <SubText className="d-none d-md-flex">
                  Gain access to the schedule of your group and
                  create events which are integrated with Google Calendars.
                </SubText>
                <AuthenticationButton theme='light' loginText="Sign Up & Start&nbsp;&nbsp;&gt;"/>
              </Header>
            </Col>
          </Row>
        </Container>
      </InnerContainer>
      <Wave/>

      <Container>
        <Row>
          <Col className="d-flex justify-content-center ">
            <HeaderImage src={size.width>850 ?Calendar:CalendarMobile} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HeaderSection;
