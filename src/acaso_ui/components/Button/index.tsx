import React from 'react';
import baseColors from '@/acaso_ui/colors';
import { Wrapper, WrapperDefault } from './styles';
import AcasoText from '../AcasoText';

interface IVariant {
  variant?: 'action_1' | 'action_2';
}

interface IButton extends IVariant {
  labelColor?: string;
  label: string;
  isDefault?: boolean;
  onPress?: () => void;
}
const getColor = ({ variant }: IVariant) => {
  switch (variant) {
    case 'action_1':
      return {
        background: baseColors.action.action_1,
        color: baseColors.primary.white,
      };
    case 'action_2':
      return {
        background: baseColors.action.action_2,
        color: baseColors.primary.white,
      };

    default:
      return {
        background: baseColors.primary.white,
        color: baseColors.primary.main,
      };
  }
};
const Button = ({
  labelColor,
  label,
  isDefault,
  variant,
  onPress,
}: IButton) => {
  if (isDefault) {
    return (
      <WrapperDefault onPress={onPress}>
        <AcasoText variant="body-3" value={label} color={labelColor} />
      </WrapperDefault>
    );
  }
  return (
    <Wrapper onPress={onPress} background={getColor({ variant }).background}>
      <AcasoText
        variant="body-2"
        value={label}
        color={labelColor || getColor({ variant }).color}
      />
    </Wrapper>
  );
};

export default Button;
