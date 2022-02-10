export type ColorVariants = 'primary' | 'secondary';
export type SizeVariants = 'small' | 'medium' | 'large' | 'xlarge';

export type Colors = Record<ColorVariants, string>;
export type FontSize = Record<SizeVariants, number>;
export type Spacing = Record<SizeVariants, number>;
export type HorizontalSpacing = Record<SizeVariants, number>;

export const colors: Colors = {
  primary: '#2E9DFB',
  secondary: '#E5E5E5',
};

export const fontSize: FontSize = {
  small: 14,
  medium: 16,
  large: 18,
  xlarge: 22,
};

export const spacing: Spacing = {
  small: 8,
  medium: 16,
  large: 24,
  xlarge: 30,
};

export const horizontalSpacing: HorizontalSpacing = {
  small: 14,
  medium: 16,
  large: 18,
  xlarge: 24,
};
