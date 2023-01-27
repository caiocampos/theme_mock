import { Theme } from "../../ThemesTypes";
import { getDeprecatedSizes } from "./deprecatedSizes";
import { ISizes } from "./ISizes";

export const getSizes = (theme: Theme): ISizes => {
  const { size } = theme;
  return {
    ...getDeprecatedSizes(theme),
    ...size,
  };
};
