import { IElevation } from "./IElevation";
import { Theme } from "../../ThemesTypes";

export const getElevation = (theme: Theme): IElevation => {
  const { elevation } = theme;
  return {
    ...elevation,
    0: elevation.none,
    1: elevation.micro,
    2: elevation.tiny,
    3: elevation.small,
    4: elevation.medium,
    6: elevation.large,
    8: elevation.largeX,
    9: elevation.largeXX,
    12: elevation.huge,
    16: elevation.hugeX,
    24: elevation.hugeXX,
  };
};
