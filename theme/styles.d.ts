import 'styled-components/native';

declare module 'styled-components/native' {
  export type ColorVariants = 'primary' | 'secondary';
  export type SizeVariants = 'small' | 'medium' | 'large' | 'xlarge';

  export type Colors = Record<ColorVariants, string>;
  export type HorizontalSpacing = Record<SizeVariants, number>;
  export type Spacing = Record<SizeVariants, number>;
  export type FontSize = Record<SizeVariants, number>;

  export interface DefaultTheme {
    fontSize: FontSize;
    spacing: Spacing;
    horizontalSpacing: HorizontalSpacing;
    colors: Colors;
  }
}
