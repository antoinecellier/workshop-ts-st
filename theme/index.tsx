import {ReactNode} from 'react';

type CustomThemeProps = {
  children: ReactNode;
};

export const CustomTheme = ({children}: CustomThemeProps) => children;
