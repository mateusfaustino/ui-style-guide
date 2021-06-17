import breakpoints from "./breakpoints"
import colors from "./colors"

const handleDefault = (variable, defaultValue) =>
    variable ? defaultValue : variable;

const primary = (color) => `
   color: ${handleDefault(color, colors.light0 )};
   background-color: ${colors.primary};
`
const primaryActive = (color) => `
   color: ${handleDefault(color, colors.light0 )};
   background-color: ${colors.primaryActive};
`
const primaryHover = (color) => `
   color: ${handleDefault(color, colors.text )};
   background-color: ${colors.primaryHover};
`
const secondary = (color) => `
   color: ${handleDefault(color, colors.text )};
   background-color: ${colors.secondary};
`
const secondaryActive = (color) => `
   color: ${handleDefault(color, colors.light0 )};
   background-color: ${colors.secondaryActive};
`
const secondaryHover = (color) => `
   color: ${handleDefault(color, colors.text )};
   background-color: ${colors.secondaryHover};
`

const disabled = (color) => `
   color: ${handleDefault(color, colors.light0 )};
   background-color: ${colors.disabled};
`

const error = (color) => `
color: ${handleDefault(color, colors.text )};
background-color: ${colors.error};
`
const errorActive = (color) => `
   color: ${handleDefault(color, colors.light0 )};
   background-color: ${colors.errorActive};
`
const errorHover = (color) => `
   color: ${handleDefault(color, colors.text)};
   background-color: ${colors.errorHover};
`

const success = (color) => `
   color: ${handleDefault(color, colors.light0 )};
   background-color: ${colors.success};
`
const successActive = (color) => `
   color: ${handleDefault(color, colors.light0 )};
   background-color: ${colors.successActive};
`
const successHover = (color) => `
   color: ${handleDefault(color, colors.text )};
   background-color: ${colors.successHover};
`


const light0 = (color) => `
   color: ${handleDefault(color, colors.text )};
   background-color: ${colors.light0};
`
const light1 = (color) => `
   color: ${handleDefault(color, colors.text )};
   background-color: ${colors.light1};
`

const gray0 = (color) => `
   color: ${handleDefault(color, colors.text )};
   background-color: ${colors.gray0};
`
const gray1 = (color) => `
   color: ${handleDefault(color, colors.text )};
   background-color: ${colors.gray1};
`

const dark0 = (color) => `
   color: ${handleDefault(color, colors.light0 )};
   background-color: ${colors.dark0};
`
const dark1 = (color) => `
   color: ${handleDefault(color, colors.light0 )};
   background-color: ${colors.dark1};
`
const dark2 = (color) => `
   color: ${handleDefault(color, colors.light0 )};
   background-color: ${colors.dark2};
`
const dark3 = (color) => `
   color: ${handleDefault(color, colors.light0 )};
   background-color: ${colors.dark3};
`

const background = {
    primary: primary,
    primaryActive: primaryActive,
    primaryHover: primaryHover,
    secondary: secondary,
    secondaryActive: secondaryActive,

    secondaryHover: secondaryHover,

    disabled: disabled,

    error: error,
    errorActive: errorActive,
    errorHover: errorHover,

    success: success,
    successActive: successActive,
    successHover: successHover,
    light0: light0,
    light1: light1,

    gray0: gray0,
    gray1: gray1,

    dark0: dark0,
    dark1: dark1,
    dark2: dark2,
    dark3: dark3,
}

export default background