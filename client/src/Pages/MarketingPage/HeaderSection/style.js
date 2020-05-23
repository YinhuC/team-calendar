import styled from 'styled-components';
import {ReactComponent as WaveFile} from '../wave_top.svg';

export const Wave = styled(WaveFile)`
  position:absolute;
`;

export const InnerContainer = styled.div`
  background-color:  #007bff;
  color: white;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  margin: 140px 0 50px 0;
`;

export const HeaderText = styled.div`
  font-size: 35px;
  font-weight: bold;
  margin: 0 0 20px 0;
  width: 90%;
`;

export const SubText = styled.div`
  font-size: 20px;
  width: 65%;
  margin: 0 0 20px 0;
`;

export const HeaderImage = styled.img`
  justify-content: center;
  width: 80%;
  margin: 0 0 80px 0;
`;
