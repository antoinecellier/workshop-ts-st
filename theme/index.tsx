import React, {ReactNode} from 'react';
import {ThemeProvider, DefaultTheme} from 'styled-components/native';

import {colors, fontSize, spacing, horizontalSpacing} from './constants';

export const theme: DefaultTheme = {
  fontSize,
  spacing,
  horizontalSpacing,
  colors,
};

type CustomThemeProps = {
  children: ReactNode;
};

export const CustomTheme = ({children}: CustomThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
