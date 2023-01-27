import { IAvatarSizes } from "./IAvatarSizes";
import { getSizes } from "../sizes";
import { Theme } from "../../ThemesTypes";

export const getAvatarSizes = (theme: Theme): IAvatarSizes => {
  const sizes = getSizes(theme);
  return {
    tiny: {
      fontSize: ".625rem",
      size: sizes.standard,
    },
    small: {
      fontSize: ".875rem",
      size: sizes.semi,
    },
    standard: {
      fontSize: "1rem",
      size: sizes.semiX,
    },
    large: {
      fontSize: "1rem",
      size: sizes.medium,
    },
    huge: {
      fontSize: "1.5rem",
      size: sizes.largeXX,
    },
  };
};
