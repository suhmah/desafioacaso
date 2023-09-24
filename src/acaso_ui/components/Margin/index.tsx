import Metrics from '@/acaso_ui/helpers/metrics';
import styled from 'styled-components/native';

interface IProps {
  height?: number;
  width?: number;
}

const Margin = styled.View<IProps>`
  width: ${(props) => props.height || Metrics(24)}px;
  height: ${(props) => props.height || Metrics(24)}px;
`;

export default Margin;
