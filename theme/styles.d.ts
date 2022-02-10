import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    fontSize: FontSize;
    spacing: Spacing;
    horizontalSpacing: HorizontalSpacing;
    colors: Colors;
  }
}
