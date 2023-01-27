import { IThemeWebBase } from './IThemeWeb'
import { parseShadows } from './parseShadows'
import { ITheme } from './theme/ITheme'

export const parseTheme = (theme: ITheme): IThemeWebBase => {
  const { shadows } = theme

  return {
    ...theme,
    shadows: parseShadows(shadows),
    typography: theme.typography
  }
}

export default parseTheme
