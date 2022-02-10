import 'styled-components';

declare module 'styled-components' {
  export type ColorVariants = 'primary' | 'secondary';
  export type SizeVariants = 'small' | 'medium' | 'large' | 'xlarge';

  export type Colors = Record<ColorVariants, string>;
  export type HorizontalSpacing = Record<Omit<SizeVariants, 'xlarge'>, number>;
  export type Spacing = Record<Omit<SizeVariants, 'xlarge'>, number>;
  export type FontSize = Record<SizeVariants, number>;

  export interface DefaultTheme {
    fontSize: FontSize;
    spacing: Spacing;
    horizontalSpacing: HorizontalSpacing;
    colors: Colors;
  }
}
