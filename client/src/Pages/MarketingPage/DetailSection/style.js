import styled from 'styled-components';
import {ReactComponent as WaveFile} from '../wave_bottom.svg';

export const Wave = styled(WaveFile)`
`;

export const HeaderBottom = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 10px 0 0 0;
  margin: 90px 0 90px 0;
`;
export const HeaderTop = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  padding: 90px 0 90px 0;
  background-color: #007BFF;
  color: white;
`;

export const HeaderText = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 0 30px 10px 30px;
`;

export const SubText = styled.div`
  font-size: 20px;
  margin: 0 30px 20px 30px;
`;

export const HeaderImage = styled.img`
  width: 100%;
`;
