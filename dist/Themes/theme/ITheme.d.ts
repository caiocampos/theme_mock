import { Asset, Color } from "../ThemesTypes";
import { IAvatarSizes } from "../tokens/avatarSizes/IAvatarSizes";
import { IButtonSizes } from "../tokens/buttonSizes/IButtonSizes";
import { IElevation } from "../tokens/elevation/IElevation";
import { IIconSizes } from "../tokens/iconSizes/IIconSizes";
import { IOpacity } from "../tokens/opacity/IOpacity";
import { ISizes } from "../tokens/sizes/ISizes";
import { IFontSize } from "../tokens/typography/IFont";
import { ITypography } from "../tokens/typography/ITypography";
/**
 * Interface with theme options
 *
 * This interface is agnostic to the styling library that will be used,
 * but was inspired by the Material UI theme options structure.
 *
 * @see https://material-ui.com/pt/customization/theming/#api
 */
export interface ITheme {
    shape?: {
        borderRadius?: number;
        badgeBorderRadius?: number;
    };
    palette?: {
        type?: "light" | "dark";
        action?: {
            /**
             * Active color
             *
             * Useful for ListItemIcon icon color, for example.
             * Since it is required since 0.24, every theme must implement it.
             */
            active: string;
            hover?: string;
            hoverOpacity?: number;
            selected?: string;
            disabled?: string;
            disabledBackground?: string;
        };
        background?: {
            paper?: string;
            default?: string;
            paperContrastText?: string;
            defaultContrastText?: string;
        };
        complementary?: {
            highlight?: string;
            link?: string;
            linkContrastText?: string;
            warning?: string;
            warningContrastText?: string;
        };
        /**
         * Divider color
         *
         * Useful for DrawerFooter border top color, for example.
         *
         * @since 0.24
         */
        divider: string;
        error?: {
            main: string;
            light?: string;
            dark?: string;
            contrastText?: string;
        };
        primary?: {
            main: string;
            light?: string;
            dark?: string;
            contrastText?: string;
        };
        secondary?: {
            main: string;
            light?: string;
            dark?: string;
            contrastText?: string;
        };
        success?: {
            main: string;
            light?: string;
            dark?: string;
            contrastText?: string;
        };
        text?: {
            primary?: string;
            secondary?: string;
            disabled?: string;
            hint?: string;
        };
    };
    sizes: ISizes;
    typography: ITypography & IFontSize;
    avatarSizes: IAvatarSizes;
    iconSizes: IIconSizes;
    buttonSizes: IButtonSizes;
    spacing: number;
    color: Color;
    shadows: IElevation;
    /**
     * @since 0.22
     * @todo Adopt opacity tokens from theme
     */
    opacity: IOpacity;
    overrides: Record<string, unknown>;
    asset: Asset;
}
//# sourceMappingURL=ITheme.d.ts.map