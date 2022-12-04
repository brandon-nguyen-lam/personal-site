import { extendTheme} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("white", "white")(props),
      textColor: mode("black", "black")(props),
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
        textDecorationColor: '#5F967C',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode("#ffffff", "#ffffff")(props),
      textUnderlineOffset: 4
    })
  },
  NextLink: {
    baseStyle: props => ({
        color: mode("#ffffff", "#ffffff")(props),
        textUnderlineOffset: 4
    }
    )
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