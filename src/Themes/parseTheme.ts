import { IThemeWebBase } from "./IThemeWeb";
import { parseShadows } from "./parseShadows";
import { ITheme } from "./theme/ITheme";
import { parseTheme as parse } from "./theme/parseTheme";
import { Theme } from "./ThemesTypes";

const parseThemeWebBase = (theme: ITheme): IThemeWebBase => {
  const { shadows } = theme;

  return {
    ...theme,
    shadows: parseShadows(shadows),
    typography: theme.typography,
  };
};

export const parseTheme = (theme: Theme): IThemeWebBase => {
  return parseThemeWebBase(parse(theme));
};

export default parseTheme;
