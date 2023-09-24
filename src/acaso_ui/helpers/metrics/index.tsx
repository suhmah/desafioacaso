import { Dimensions, PixelRatio, Platform } from 'react-native';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('window');

const wscale: number = SCREEN_WIDTH / 375;

export default function Metrics(size: number): number {
  const newSize = size * wscale;
  return Platform.OS === 'ios'
    ? PixelRatio.roundToNearestPixel(newSize)
    : PixelRatio.getPixelSizeForLayoutSize(newSize);
}
export const WIDTH = SCREEN_WIDTH;
export const HEIGHT = SCREEN_HEIGHT;
