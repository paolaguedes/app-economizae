import React from "react";
import Svg, { Path } from "react-native-svg";

const CustomProfileIcon = ({ color = "#000", size = 24 }) => (
  <Svg width={size} height={size} viewBox="0 0 26 26" fill="none">
    <Path
      d="M1 25C1 21.2916 4.41306 18.288 8.62424 18.288H17.3759C21.5871 18.288 25 21.2916 25 25M13.0011 12.5266C16.6148 12.5266 19.5457 9.94743 19.5457 6.76331C19.5457 3.58111 16.6148 1 13.0011 1C9.38532 1 6.45426 3.58111 6.45426 6.76331C6.45426 9.94743 9.38532 12.5266 13.0011 12.5266Z"
      stroke={color}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default CustomProfileIcon;
