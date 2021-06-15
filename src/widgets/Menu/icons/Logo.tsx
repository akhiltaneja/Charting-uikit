import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 360 62" {...props}>
      <image width="360" height="62" href={isDark ? "/images/wind/WindLogo.png" : "/images/wind/WindLogo.png"} />
    </Svg>
  );
};

export default Logo;
