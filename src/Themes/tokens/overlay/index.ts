import { IOverlay } from "./IOverlay";
import { Theme } from "../../ThemesTypes";

export const getOverlay = (theme: Theme): IOverlay => {
  return {
    solidBlack: theme.opacity.mediumHigh,
  };
};
