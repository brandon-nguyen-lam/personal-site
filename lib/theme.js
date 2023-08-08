import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const customNProgressStyles = `
  /* Change the color of nprogress bar */
  #nprogress .bar {
    background: #5F967C;
    z-index: 9999; // Change this value as needed
  }
`;

const styles = {
  global: props => ({
    body: {
      bg: mode('#F5F5F5', '#F5F5F5')(props),
      textColor: mode('black', 'black')(props),
      color: mode('black', 'black')(props),
    },
    // Append the custom nprogress styles directly
    styles: {
      ...theme.styles.global.styles,
      ...customNProgressStyles,
    },
  }),
};


const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 5,
        textDecorationColor: '#5F967C',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('black', 'black')(props),
      textDecorationColor: '#5F967C',
      textUnderlineOffset: 5
    })
  },
  NextLink: {
    baseStyle: props => ({
      color: mode('black', 'black')(props),
      textDecorationColor: '#5F967C',
      textUnderlineOffset: 5,
      style: 'textdecorationcolor: #5F967C; textUnderlineOffset: 5px'
    })
  }
}
const fonts = {
  heading: "'M PLUS Rounded 1c', sans-serif",
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ styles, components, fonts, config });

export default theme;
