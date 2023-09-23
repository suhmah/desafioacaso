import styled from 'styled-components/native';
// don't import into acas_ui because both are exported in chance_ui resulting in errors for circly
import baseColors from '@/acaso_ui/colors';
import BaseIcon from '../BaseIcon';

export const Main = styled.SafeAreaView`
  flex: 1;

  align-items: center;

  background-color: ${baseColors.primary.main};
`;

export const Image = styled(BaseIcon)`
  width: 130px;
  height: 25px;

  margin-top: 20px;
`;
