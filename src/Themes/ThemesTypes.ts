declare const Themes: Themes.Themes;

declare namespace Themes {
  export interface Theme {
    asset: Asset;
    borderRadius: BorderRadius;
    color: Color;
    elevation: Elevation;
    opacity: Opacity;
    size: Size;
    spacing: Spacing;
    typography: Typography;
    alert: Alert;
    appBarTop: AppBarTop;
    avatar: Avatar;
    badge: Badge;
    button: Button;
    card: Card;
    checkbox: Checkbox;
    counter: Counter;
    dialog: Dialog;
    expansionPanel: ExpansionPanel;
    iconButton: IconButton;
    image: Card;
    link: Link;
    menuItem: Semi;
    navigationDrawer: NavigationDrawer;
    progressIndicator: ProgressIndicator;
    radioButton: Checkbox;
    rating: Rating;
    shortcut: Checkbox;
    snackbar: Snackbar;
    tab: Link;
    tag: Tag;
    textField: TextField;
    heading1: Heading1;
    heading2: Heading1;
    heading3: Heading1;
    heading4: Heading1;
    heading5: Heading1;
    heading6: Heading1;
    subtitle1: Heading1;
    subtitle2: Heading1;
    body1: Heading1;
    body2: Heading1;
    caption: Heading1;
    overline: Heading1;
  }
  export interface Heading1 {
    fontSize: number;
    fontWeight: number;
    lineHeight: number;
    letterSpacing: number;
  }
  export interface TextField {
    label: Title;
    content: Title;
    helperText: Title;
    borderRadius: number;
  }
  export interface Tag {
    label: Title;
    small: Card;
    standard: Card;
  }
  export interface Snackbar {
    content: Title;
    borderRadius: number;
  }
  export interface Rating {
    counter: Link;
    input: Link;
  }
  export interface ProgressIndicator {
    standard: Semi;
    semi: Semi;
    medium: Semi;
    large: Semi;
  }
  export interface NavigationDrawer {
    header: Header;
    section: Section;
  }
  export interface Section {
    title: Title;
    item: Title;
  }
  export interface Header {
    title: Title;
    subtitle: Title;
  }
  export interface Link {
    label: Title;
  }
  export interface IconButton {
    semi: Semi;
    semiX: Semi;
    medium: Semi;
  }
  export interface Semi {
    borderRadius: number;
  }
  export interface ExpansionPanel {
    title: Title;
    borderRadius: number;
  }
  export interface Dialog {
    title: Title;
    body: Title;
    borderRadius: number;
  }
  export interface Counter {
    label: Title;
    content: Title;
    borderRadius: number;
  }
  export interface Checkbox {
    label: Title;
    borderRadius: number;
  }
  export interface Card {
    borderRadius: BorderRadius2;
  }
  export interface BorderRadius2 {
    enable: number;
    disable: number;
  }
  export interface Button {
    label: Title;
    borderRadius: number;
    contained: Contained;
    outlined: Contained;
    text: Contained;
  }
  export interface Contained {
    color: Color3;
  }
  export interface Color3 {
    enable: Enable;
    disable: Enable;
    hover: Enable;
    focus: Enable;
  }
  export interface Enable {
    background: string;
    border: string;
    label: string;
  }
  export interface Badge {
    label: Title;
    standard: Standard2;
    dot: Standard2;
    color: Color2;
  }
  export interface Color2 {
    primary: Primary;
    secondary: Primary;
    success: Primary;
    alert: Primary;
  }
  export interface Primary {
    label: string;
    background: string;
  }
  export interface Standard2 {
    height: number;
    borderRadius: number;
  }
  export interface Avatar {
    standard: Standard;
    semi: Standard;
    semiX: Standard;
    medium: Standard;
    largeXXX: Standard;
    primary: Display;
    fallback: Display;
  }
  export interface Standard {
    fontSize: number;
    letterSpacing: number;
    lineHeight: number;
    borderRadius: number;
  }
  export interface AppBarTop {
    title: Title;
  }
  export interface Alert {
    title: Title;
    content: Title;
    borderRadius: number;
  }
  export interface Title {
    fontSize: number;
    letterSpacing: number;
    lineHeight: number;
    primary: Display;
    fallback: Display;
  }
  export interface Typography {
    fontSize: FontSize;
    lineHeight: LineHeight;
    fontFamily: FontFamily;
    fontWeight: FontWeight;
    display: Display;
    headline: Display;
    body: Body2;
    fallback: Display;
  }
  export interface Body2 {
    regular: Display;
    bold: Display;
  }
  export interface Display {
    fontFamily: string;
    fontWeight: number;
  }
  export interface FontWeight {
    regular: number;
    medium: number;
  }
  export interface FontFamily {
    primary: string;
    secondary: string;
    branding: string;
    code: string;
  }
  export interface LineHeight {
    auto: number;
    reset: number;
    small: number;
    medium: number;
    large: number;
  }
  export interface FontSize {
    level1: number;
    level2: number;
    level3: number;
    level4: number;
    level5: number;
    level6: number;
    level7: number;
    level8: number;
    level9: number;
    level10: number;
    level11: number;
    level12: number;
    level13: number;
    level14: number;
    level15: number;
    level16: number;
    level17: number;
  }
  export interface Spacing {
    none: number;
    micro: number;
    tiny: number;
    small: number;
    standard: number;
    semi: number;
    large: number;
    xLarge: number;
  }
  export interface Size {
    none: number;
    micro: number;
    tiny: number;
    small: number;
    standard: number;
    semi: number;
    semiX: number;
    medium: number;
    mediumX: number;
    large: number;
    largeX: number;
    largeXX: number;
    largeXXX: number;
    huge: number;
    hugeX: number;
    hugeXX: number;
    hugeXXX: number;
    veryHuge: number;
  }
  export interface Opacity {
    transparent: number;
    lower: number;
    veryLow: number;
    low: number;
    mediumLow: number;
    disabledLow: number;
    disabled: number;
    medium: number;
    mediumHigh: number;
    high: number;
    veryHigh: number;
    opaque: number;
  }
  export interface Elevation {
    none: string;
    micro: string;
    tiny: string;
    small: string;
    medium: string;
    large: string;
    largeX: string;
    largeXX: string;
    huge: string;
    hugeX: string;
    hugeXX: string;
  }
  export interface Color {
    neutral50: string;
    neutral100: string;
    neutral200: string;
    neutral300: string;
    neutral400: string;
    neutral500: string;
    neutral600: string;
    neutral700: string;
    neutral800: string;
    neutral900: string;
    primary: string;
    onPrimary: string;
    primaryLight: string;
    onPrimaryLight: string;
    primaryLightest: string;
    onPrimaryLightest: string;
    primaryDark: string;
    onPrimaryDark: string;
    primaryDarkest: string;
    onPrimaryDarkest: string;
    secondary: string;
    onSecondary: string;
    secondaryLight: string;
    onSecondaryLight: string;
    secondaryDark: string;
    onSecondaryDark: string;
    background: string;
    onBackground: string;
    surface: string;
    onSurface: string;
    highlight: string;
    highEmphasis: string;
    mediumEmphasis: string;
    lowEmphasis: string;
    link: string;
    onLink: string;
    success: string;
    onSuccess: string;
    warning: string;
    onWarning: string;
    alert: string;
    onAlert: string;
  }
  export interface BorderRadius {
    none: number;
    small: number;
    medium: number;
    large: number;
  }
  export interface Asset {
    font: Font;
    brand: Brand;
  }
  export interface Brand {
    neutral: Neutral;
    custom: Neutral;
  }
  export interface Neutral {
    a: A;
    b: A;
  }
  export interface A {
    file: string;
    width: number;
    height: number;
  }
  export interface Font {
    file: File;
  }
  export interface File {
    display: string;
    headline: string;
    body: Body;
  }
  export interface Body {
    regular: string;
    bold: string;
  }

  export interface BrandThemes {
    dark: Theme;
    light: Theme;
  }

  export interface Themes {
    aesop: BrandThemes;
    avon: BrandThemes;
    biome: BrandThemes;
    natdsTest: BrandThemes;
    natura: BrandThemes;
    theBodyShop: BrandThemes;
  }
}

export = Themes;
