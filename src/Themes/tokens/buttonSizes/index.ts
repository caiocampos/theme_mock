import { IButtonSizes } from "./IButtonSizes";
import { getSizes } from "../sizes";
import { Theme } from "../../ThemesTypes";

export const getButtonSizes = (theme: Theme): IButtonSizes => {
  const sizes = getSizes(theme);
  return {
    small: {
      paddingTop: sizes.none,
      paddingRight: sizes.tiny,
      paddingBottom: sizes.none,
      paddingLeft: sizes.tiny,
      height: sizes.semi,
    },
    medium: {
      height: sizes.semiX,
      paddingTop: sizes.none,
      paddingRight: sizes.small - sizes.micro,
      paddingBottom: sizes.none,
      paddingLeft: sizes.small - sizes.micro,
    },
    large: {
      paddingTop: sizes.none,
      paddingRight: sizes.small,
      paddingBottom: sizes.none,
      paddingLeft: sizes.small,
      height: sizes.medium,
    },
  };
};
