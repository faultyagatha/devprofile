import colors from 'tailwindcss/colors';

export const purge = ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'];
export const darkMode = 'media';
export const theme = {
  colors: {
    gray: colors.coolGray,
    blue: colors.lightBlue,
    red: colors.rose,
    pink: colors.fuchsia,
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
  extend: {
    spacing: {
      '128': '32rem',
      '144': '36rem',
    },
    borderRadius: {
      '4xl': '2rem',
    }
  }
}
export const variants = {
  extend: {
    borderColor: ['focus-visible'],
    opacity: ['disabled'],
  }
}
export const plugins = []

// import color from "color"

// export default theme => {
//   const colors =
//     typeof theme === "string" ? require(`./src/themes/${theme}`) : theme

//   return {
//     purge: {
//       content: [`${__dirname}/src/**/*.js`, `./src/**/*.js`],
//       options: {
//         whitelistPatterns: [/^text-skill/, /^border-skill/],
//       },
//     },
//     theme: {
//       fontFamily: {
//         header: ["Source Sans Pro", "sans-serif"],
//         text: ["Roboto", "sans-serif"],
//       },
//       extend: {
//         colors: {
//           ...colors,
//           "back-light": color(colors.back)
//             .lighten(0.18)
//             .hex(),
//         },
//         borderRadius: {
//           lg: "1rem",
//         },
//         spacing: {
//           "14": "3.5rem",
//         },
//       },
//     },
//   }
// }
