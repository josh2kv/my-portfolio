import { palette } from "./presetPalettes"

const theme = {
  colors: {
    palette,
    logo: "#ED1C29",
    bgBody: "#F0F2F5",
    bgHeader: palette.gray2,
    bgSection: palette.bg.light,
    bgGray: palette.gray5,
    bgLight: palette.gray3,

    primary: palette.blue6,
    textMain: palette.neut.primary,
    textSub: palette.neut.secondary,
    textInv: palette.neutInv.primary,
    disabledInv: palette.neutInv.disabled,

    textDanger: palette.red5,
    textWarning: palette.gold6,
    textSuccess: palette.green6,

    bgDanger: palette.red1,
    bgWarning: palette.gold1,
    bgSuccess: palette.green1,

    borderHeader: "#eaeded",
    borderLight: palette.neut.border,

    power: palette.orange6,
    lng: palette.purple6,
    steam: palette.magenta6,
    water: palette.cyan6,
    output: palette.green6,
  },

  linearGrad: {
    danger: `linear-gradient( 45deg, ${palette.red6}, ${palette.red5} )`,
    warning: `linear-gradient( 45deg, ${palette.gold6}, ${palette.gold5} )`,
    success: `linear-gradient( 45deg, ${palette.green6}, ${palette.green5} )`,
  },

  fontSizes: {
    s1: "1rem",
    s2: "1.2rem",
    s3: "1.4rem",
    s4: "1.6rem",
    s5: "1.8rem",
    s6: "2rem",
    s7: "2.4rem",
    s8: "2.8rem",
    s9: "3.2rem",
    s10: "3.6rem",
    s11: "4rem",
    s12: "4.8rem",
    s13: "5.6rem",
    s14: "6.4rem",
  },
  fontWeights: { light: 300, regular: 400, medium: 500, bold: 700 },
  lineHeights: { short: 0.75, none: 1, tight: 1.25, normal: 1.6, loose: 2 },
  letterSpacings: {
    tight: "-0.05rem",
    normal: "0em",
    wide: "0.1em",
    wider: ".25em",
  },
  shadows: {
    section: "0 1px 1px 0 rgba(0, 0, 0, 0.25)",
    minimum: "0 1px 1px 0 rgba(0, 0, 0, 0.25)",
    aws: "0 1px 1px 0 rgb(0 28 36 / 30%), 1px 1px 1px 0 rgb(0 28 36 / 15%), -1px 1px 1px 0 rgb(0 28 36 / 15%);",
  },
  default: {
    color: palette.neut.primary,
    fontFamily: '"Noto Sans KR", sans-serif',
    fontSize: "1.6rem",
    fontWeight: 400,
    lineHeight: 1.6,
    letterSpacings: "normal",
    borderRadius: "2px",
  },
}

export default theme
