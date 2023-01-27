import { IOpacity } from "./IOpacity";
import { Theme } from "../../ThemesTypes";

export const getOpacity = (theme: Theme): IOpacity => {
  const { opacity } = theme;
  return {
    ...opacity,
    "00": opacity.transparent,
    "04": opacity.lower,
    "08": opacity.veryLow,
    12: opacity.low,
    16: opacity.mediumLow,
    24: opacity.disabledLow,
    32: opacity.disabled,
    48: opacity.medium,
    56: opacity.mediumHigh,
    64: opacity.high,
    80: opacity.veryHigh,
  };
};
