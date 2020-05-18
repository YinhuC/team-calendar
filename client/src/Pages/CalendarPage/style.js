import styled from 'styled-components';
import {
  ListGroup, ListGroupItem, Button,
} from 'reactstrap';

export const OuterContainer = styled.div`
  display:flex;
  flex-direction: row;
  justify-content:flex-start;
  align-items: start;
  border-top: solid 0.5px;
  border-color: lightgrey;
`;

export const LeftContainer = styled.div`
  padding: 0 10px 0 20px;
  display:flex;
  flex-direction: column;
  justify-content:center;
  width:17%;
`;


export const Heading = styled.div`
  display:flex;
  font-size: 35px;
  font-weight: 500;
  width:100%;
  padding: 10px 0 10px 20px;
  height:70px;
`;

export const Group = styled.div`
  display:flex;
  justify-content:center;
  width: 100%;
`;

export const Member = styled.div`
  display:flex;
  justify-content:center;
  width: 100%;
`;

export const List = styled(ListGroup)`
  width: 100%;
`;

export const Item = styled(ListGroupItem)`
  padding: 10px 20px 10px 40px;
  width:100%;
  &:focus, &:hover, &:active {
  background-color: lightgrey;
  }
`;

export const Subheader = styled.div`
  font-size:20px;
  font-weight:500;
  margin: 0 0 10px 10px;
`;

export const Toolbar = styled.div`
  width:100%;
  margin: 0 50px 20px 50px;
`;

export const CalendarContainer = styled.div`
  width:100%;
  border-top: solid 0.5px;
  border-color: #EFF0F5;
  display:flex;
  justify-content:center;
  flex-direction: column;
  align-items:center;
  padding: 40px 45px 40px 45px;
  .fc-today {
    background: #FFF !important;
    border: none !important;
    border-top: 1px solid #ddd !important;
    font-weight: bold;
  }
  .fc-day-header{
    color:#74788D;
  }
  .fc-axis{
    color:#74788D;
    font-size:14px
  }
  .fc-icon{
    color:#74788D;
    &:active{
      color:white;
    }
  }
  button{
    background-color: white;
    border-color:#EFF0F5;
    color:#74788D;
    height:40px;
    &:hover:enabled{
      background-color: #f0edf0;
      border-color: #EFF0F5;
      color:#74788D;
    }
    &:focus{
      outline: none;
      box-shadow: none;
    }
    &:active{
      outline: none;
      box-shadow: none;
    }
  }
  .fc-button-primary:not(:disabled).fc-button-active{
    background-color: #007BFF;
    border-color: #dddce0;
  }
  .fc-button-primary:not(:disabled):active{
    background-color: #007BFF;
    border-color: #dddce0;
  }
  .fc-center{
    font-size:14px;
  }
  .fc-today-button:disabled{
    background-color: #EFF0F5;
    border-color: #dddce0;
    &:hover{
      color:white;
      border-color:lightgrey;
      background-color: #F5F5F9;
    }
  }
`;

export const OuterCalendarContainer = styled.div`
  display:flex;
  flex-direction: column;
  width:96%;
  margin: 50px 0 50px 25px;
  border-radius:5px;
  background-color: white;
  box-shadow: 2px 2px 10px lightgrey;

`;

export const RightContainer = styled.div`
  width:84%;
  display: flex;
  justify-content:center;
  background-color:#EFF0F5;
  border-left: solid 0.5px;
  border-color: lightgrey;
`;

export const Add = styled(Button)`
  margin:0px 30px 0px 30px;
  width:140px;
  height: 40px;
  padding: 0 0 0 0;
`;

export const SmallCalendarContainer = styled.div`
  display:flex;
  justify-content:center;
  height:480px;
  width:100%;
`;

