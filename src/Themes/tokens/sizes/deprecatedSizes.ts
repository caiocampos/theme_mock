import { Theme } from "../../ThemesTypes";

export const getDeprecatedSizes = (theme: Theme) => {
  const { size } = theme;
  return {
    semix: size.semiX,
    mediumx: size.mediumX,
    largex: size.largeX,
    largexx: size.largeXX,
    largexxx: size.largeXXX,
    hugex: size.hugeX,
    hugexx: size.hugeXX,
    hugexxx: size.hugeXXX,
    veryhuge: size.veryHuge,
  };
};
