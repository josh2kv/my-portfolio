import themeGet from '@styled-system/theme-get';
import { createGlobalStyle, css } from 'styled-components';
import { device } from './breakpoints.js';

export const GlobalStyle = createGlobalStyle`${css`
  ::selection {
    background: ${props => props.theme.colors.primary};
    color: #ffffff;
  }

  html {
    font-size: 50%; // 1rem = 8px

    // Medium Device >=768
    ${device.medium} {
      font-size: 56.25%; // 1rem = 9px
    }

    // Extra Large Device >=1200
    ${device.xlarge} {
      font-size: 62.5%; // 1rem = 10px
    }
  }

  body {
    font-size: ${props => props.theme.default.fontSize}rem;
    font-weight: ${props => props.theme.default.fontWeight};
    line-height: ${props => props.theme.default.lineHeight};
    letter-spacing: ${props => props.theme.default.letterSpacing};
    color: ${props => props.theme.default.color};
    font-family: ${props => props.theme.default.fontFamily};
  }

  h1 {
    font-size: ${props => props.theme.fontSizes[11]}rem;
  }
  h2 {
    font-size: ${props => props.theme.fontSizes[8]}rem;
  }
  h3 {
    font-size: ${props => props.theme.fontSizes[7]}rem;
    line-height: ${themeGet('lineHeights.tight')};
  }
  h4 {
    font-size: ${props => props.theme.fontSizes[6]}rem;
  }
  h5 {
    font-size: ${props => props.theme.fontSizes[5]}rem;
  }
  h6 {
    font-size: ${props => props.theme.fontSizes[4]}rem;
  }

  .react-reveal {
    width: 100%;
    height: 100%;
  }

  .color-white {
    color: #ffffff;
  }
`}`;
