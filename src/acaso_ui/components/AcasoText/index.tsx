import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';
import { TAcasoTextVariants, variants } from './variantes';

interface IAcasoTextProps extends TextProps {
  variant: TAcasoTextVariants;
  color?: string;
  size?: number;
  lineHeight?: number;
  center?: boolean;
  uppercase?: boolean;
  value?: string | number;
}

const composeStyle = (props: IAcasoTextProps): TextStyle => {
  const variantStyle = variants[props.variant || 'headtile-1'];

  return {
    ...variantStyle,
    color: props?.color || variantStyle.color,
    fontSize: props?.size || variantStyle?.fontSize,
    lineHeight: props?.lineHeight || variantStyle?.lineHeight,
    textAlign: props?.center ? 'center' : 'left',
    textTransform: props?.uppercase ? 'uppercase' : 'none',
  };
};

const AcasoText = ({
  value,
  style = {},
  allowFontScaling = false,
  ...props
}: IAcasoTextProps) => {
  if (!value) return null;
  const composedStyle = composeStyle(props);
  return (
    <Text
      {...props}
      allowFontScaling={allowFontScaling}
      style={[composedStyle, style]}
    >
      {!!value && `${value}`}
    </Text>
  );
};

export default AcasoText;
