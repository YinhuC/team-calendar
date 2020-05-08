import styled from "styled-components";
import { Card } from 'reactstrap'

export const DashbaordItem = styled(Card)`
  display: flex;
  justify-content: center;
  height:380px;
  box-shadow: 2px 2px 10px grey;
  margin:20px 0 20px 0;
  border-radius: 10px;
`;

export const OuterContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;

`;

export const InnerContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  width:80%;
`;

export const Heading = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  font-size: 35px;
  font-weight: 500;
  margin: 20px 0 0 0;
`;

export const CardImage = styled.img`
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 1;
  transition: all 1.0s ease;
  background-color: #3c4858;
  height:100%;
  width:100%;
  &:hover{
    transform: rotate(10deg) scale(1.5);
    opacity: 0.5;
  }
  z-index: 1;
`;

export const ImageContainer = styled.div`
  width:100%;
  height:200px;
  position: relative;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
