import styled from 'styled-components/native';
import baseColors from '@/acaso_ui/colors';
import Metrics from '@/acaso_ui/helpers/metrics';
import BaseIcon from '../BaseIcon';

export const Main = styled.SafeAreaView`
  flex: 1;

  background-color: ${baseColors.primary.main};
`;

export const Wrapper = styled.ScrollView.attrs({
  contentContainerStyle: { alignItems: 'center' },
})`
  width: 100%;
`;

export const Image = styled(BaseIcon)`
  width: ${Metrics(130)}px;
  height: ${Metrics(25)}px;

  margin-top: ${Metrics(20)}px;
`;
