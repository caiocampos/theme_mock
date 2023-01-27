import { IRadius } from "./IRadius";
import { Theme } from "../../ThemesTypes";

export const getRadius = (theme: Theme): IRadius => {
  const { borderRadius } = theme;
  return {
    ...borderRadius,
    circle: "50%",
  };
};
