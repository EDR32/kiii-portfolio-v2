import useWindowDimensions from './useWindowsDimension';

export default function useWindowsLayout() {
  const { width, height } = useWindowDimensions({ resizeListener: true });
  const widthPerFrame = width / 12;

  return {
    screenWidth: width,
    screenHeight: height,
    widthPerFrame,
  };
}
