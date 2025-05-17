import React from "react";
import Svg, { Path } from "react-native-svg";

const CustomProductIcon = ({ color = "#000", size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 26 26" fill="none">
    <Path
      d="M25 9.217V4C25 2.3425 23.7365 1 22.1765 1H17.2664M8.73364 1H3.82353C2.26353 1 1 2.3425 1 4V9.217M1 16.783V22C1 23.6575 2.26353 25 3.82353 25H8.73364M17.2664 25H22.1765C23.7365 25 25 23.6575 25 22V16.783M19.3529 7V19M6.64706 7V19M15.1176 7V19M10.8824 7V19"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default CustomProductIcon;
