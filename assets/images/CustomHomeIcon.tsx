import React from "react";
import Svg, { Path } from "react-native-svg";

const CustomHomeIcon = ({ color = "#000", size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 26 26" fill="none">
    <Path
      d="M3.40008 24.9993V8.46597L13 1M3.40008 24.9993H22.6001M3.40008 24.9993L9.40008 25V17C9.40008 15.5267 10.4741 14.3333 11.8001 14.3333H14.2001C15.5261 14.3333 16.6001 15.5267 16.6001 17V25L22.6001 24.9993M22.6001 24.9993V8.46597L13 1M1 10.3333L13 1M13 1L25 10.3333"
      stroke={color}
      stroke-width="1.3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default CustomHomeIcon;
