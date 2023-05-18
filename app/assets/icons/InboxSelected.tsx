import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <Path
      stroke="#24786D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.503 15.762A9.696 9.696 0 0 0 20.75 11 9.75 9.75 0 0 0 11 1.25 9.75 9.75 0 0 0 1.25 11 9.75 9.75 0 0 0 11 20.75a9.696 9.696 0 0 0 4.762-1.247l4.988 1.247-1.247-4.988Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#24786D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.808 11.35a.27.27 0 1 1 .384.382.27.27 0 0 1-.384-.382M6.475 11.35a.27.27 0 1 1 .384.382.27.27 0 0 1-.384-.382M15.142 11.35a.27.27 0 1 1 .383.382.27.27 0 0 1-.383-.382"
    />
  </Svg>
);
export default SvgComponent;
