import { IIconSizes } from "./IIconSizes";
import { getSizes } from "../sizes";
import { Theme } from "../../ThemesTypes";

export const getIconSizes = (theme: Theme): IIconSizes => {
  const sizes = getSizes(theme);
  return {
    micro: sizes.small,
    tiny: sizes.standard,
    small: sizes.semi,
    standard: sizes.medium,
    medium: sizes.large,
    large: sizes.largeX,
    largex: sizes.huge,
    largeX: sizes.huge,
    largexx: sizes.hugeX,
    largeXX: sizes.hugeX,
    huge: sizes.hugeXX,
    hugex: sizes.hugeXXX,
    hugeX: sizes.hugeXXX,
    hugexx: sizes.veryHuge,
    hugeXX: sizes.veryHuge,
  };
};
