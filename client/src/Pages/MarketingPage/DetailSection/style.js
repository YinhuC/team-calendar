import styled from 'styled-components';
import {ReactComponent as WaveFile} from '../wave_bottom.svg';

export const Wave = styled(WaveFile)`

`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  text-align: left;
  padding: 10px 10px 0 10px;
  margin: 90px 0 0 0;
`;
export const HeaderTop = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  text-align: left;
  padding: 10px;
  padding: 90px 0 90px 0;
  background-color: #007BFF;
  color: white;
`;

export const HeaderText = styled.div`
  font-size: 35px;
  font-weight: bold;
  margin: 0 0 10px 0;
`;

export const SubText = styled.div`
  font-size: 20px;
  margin: 0 0 20px 0;
`;

export const HeaderImage = styled.img`
  width: 100%;
`;
