import baseColors from '@/acaso_ui/colors';
import Metrics from '@/acaso_ui/helpers/metrics';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
`;

const InputDesign = `

  width: 100%;

  color: ${baseColors.primary.white};


  padding: ${Metrics(16)}px;
  margin-top: ${Metrics(8)}px;

  border-radius: ${Metrics(6)}px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: baseColors.calligraphy.grayWhite,
  autoCapitalize: 'none',
})`
  ${InputDesign}
  background-color: ${baseColors.secondary.main};
`;
export const ContainerInput = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: center;

  ${InputDesign}

  background-color: ${baseColors.secondary.main};
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: baseColors.calligraphy.grayWhite,
  autoCapitalize: 'none',
})`
  flex: 1;

  color: ${baseColors.primary.white};
`;
