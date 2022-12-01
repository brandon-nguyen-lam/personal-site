import { extendTheme} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#5f967c", "#5f967c")(props),
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 5,
        textDecorationColor: '#black',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode("#5f967c", "ff63c3")(props),
      textUnderlineOffset: 4
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c', sans-serif",
}

const colors = {
  glassTeal: "#88ccca",
}

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
}

const theme = extendTheme({ styles, components, fonts, colors, config });

export default theme;