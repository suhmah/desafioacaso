import { colors } from '@/acaso_ui';
import styled from 'styled-components/native';
import BaseIcon from '../BaseIcon';

export const Main = styled.SafeAreaView`
  flex: 1;

  align-items: center;

  background-color: ${colors.primary.main};
`;

export const Image = styled(BaseIcon)`
  width: 130px;
  height: 25px;

  margin-top: 20px;
`;
