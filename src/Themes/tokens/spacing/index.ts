import { ISpacing } from "./ISpacing";
import { getSizes } from "../sizes";
import { Theme } from "../../ThemesTypes";

export const getSpacing = (theme: Theme): ISpacing => {
  const sizes = getSizes(theme);
  return {
    spacing: sizes.tiny,
    spacingNone: sizes.none,
    spacingMicro: sizes.micro,
    spacingTiny: sizes.tiny,
    spacingSmall: sizes.small,
    spacingStandard: sizes.standard,
    spacingSemi: sizes.semi,
    spacingLarge: sizes.medium,
    spacingHuge: sizes.large,
    spacingHugeX: sizes.hugeX,
    spacingHugeXX: sizes.hugeXX,
    spacingHugeXXX: sizes.hugeXXX,
    spacingVeryHuge: sizes.veryHuge,
  };
};
