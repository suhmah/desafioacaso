import Metrics from '@/acaso_ui/helpers/metrics';
import styled from 'styled-components/native';

interface IProps {
  background: string;
}

export const Wrapper = styled.TouchableHighlight<IProps>`
  width: 100%;
  padding: ${Metrics(19)}px 0;

  align-items: center;

  background-color: ${(props) => props.background};

  border-radius: ${Metrics(30.5)}px;
`;
export const WrapperDefault = styled.TouchableHighlight`
  width: 100%;

  align-items: center;
`;
