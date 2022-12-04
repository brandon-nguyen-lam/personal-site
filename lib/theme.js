import { extendTheme} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("white", "white")(props),
      textColor: mode("black", "black")(props),
      color: mode("black", "black")(props),
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
      color: mode("black", "black")(props),
      textDecorationColor: '#5F967C',
      textUnderlineOffset: 5
    })
  },
  NextLink: {
    baseStyle: props => ({
        color: mode("black", "black")(props),
        // textDecorationColor: '#5F967C',
        // textUnderlineOffset: 5,
        style: "textdecorationcolor: #5F967C; textUnderlineOffset: 5px"

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