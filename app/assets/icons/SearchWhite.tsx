import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    // xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.958 15.958 3.209 3.209m-.917-9.625a8.708 8.708 0 1 0-17.417 0 8.708 8.708 0 0 0 17.417 0Z"
    />
  </Svg>
);
export default SvgComponent;
