import { createCss } from '@stitches/react';

export const { styled, css, global, keyframes, getCssString, theme } =
  createCss({
    theme: {
      colors: {
        middarkgrey: '#414042',
        darkgrey: '#272727',
        darkwhite: '#f8f8f8',
      },
      space: {
        xs: '2px',
        sm: '4px',
        base: '8px',
        lg: '16px',
      },
      fontSizes: {
        base: '16px',
        large: '18px',
        xl: '24px',
        xxl: '32px',
      },
      fontWeights: {},
      lineHeights: {},
      letterSpacings: {},
      sizes: {},
      borderWidths: {},
      borderStyles: {},
      radii: {
        xs: '2px',
        sm: '4px',
        base: '8px',
        lg: '16px',
      },
      shadows: {},
      zIndices: {},
      transitions: {},
    },
    media: {
      sm: '(min-width: 640px)',
    },
    utils: {
      mx: (config) => (value) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (config) => (value) => ({
        marginTop: value,
        marginBottom: value,
      }),
      px: (config) => (value) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (config) => (value) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      size: (config) => (value) => ({
        width: value,
        height: value,
      }),
    },
  });
