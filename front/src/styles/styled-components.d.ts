import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      dark: string,
      blue: string,
      gray: string,
      white50: string,
      white: string,
      yellow: string
    };
  };
};