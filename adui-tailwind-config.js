/* eslint-disable */
// @ts-ignore
const plugin = require("tailwindcss/plugin")

/**
 * 基础 spacing 取 4px 间距生成
 */
const spacing = {}
for (let index = 0; index <= 500; index += 4) {
  spacing[index] = `${index}${index === 0 ? "" : "px"}`
}

const colors = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000",
  white: "#fff",
  green: "#07c160",
  orange: "#eda20c",
  blue: "#2b7bd6",
  red: "#d9514c",
  gray: {
    0: "#ffffff",
    50: "#fafafa",
    100: "#f2f2f2",
    200: "#ebebeb",
    300: "#e6e6e6",
    400: "#e0e0e0",
    500: "#d6d6d6",
    600: "#c7c7c7",
    700: "#a3a3a3",
    800: "#6b6b6b",
    900: "#1f1f1f",
  },
  "tp-gray": {
    0: "rgba(0, 0, 0, 0)",
    50: "rgba(0, 0, 0, 0.02)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.1)",
    400: "rgba(0, 0, 0, 0.12)",
    500: "rgba(0, 0, 0, 0.16)",
    600: "rgba(0, 0, 0, 0.22)",
    700: "rgba(0, 0, 0, 0.36)",
    800: "rgba(0, 0, 0, 0.58)",
    900: "rgba(0, 0, 0, 0.88)",
  },
}

/**
 * 对 t r b l 四个方向单面的 1px shadow
 */
const shadows = {}
;["1", "2"].forEach((length) => {
  const prefix = length === "1" ? "" : `${length}-`
  Object.keys(colors).forEach((key) => {
    const value = colors[key]
    if (typeof value === "string") {
      shadows[`${prefix}${key}`] = `0 0 0 ${length}px ${value}`
      shadows[`${prefix}inset-${key}`] = `0 0 0 ${length}px ${value} inset`
      shadows[`${prefix}t-${key}`] = `0 -${length}px 0 ${value}`
      shadows[`${prefix}t-inset-${key}`] = `0 ${length}px 0 ${value} inset`
      shadows[`${prefix}b-${key}`] = `0 ${length}px 0 ${value}`
      shadows[`${prefix}b-inset-${key}`] = `0 -${length}px 0 ${value} inset`
      shadows[`${prefix}r-${key}`] = `${length}px 0 0 ${value}`
      shadows[`${prefix}r-inset-${key}`] = `-${length}px 0 0 ${value} inset`
      shadows[`${prefix}l-${key}`] = `-${length}px 0 0 ${value}`
      shadows[`${prefix}l-inset-${key}`] = `${length}px 0 0 ${value} inset`
      shadows[
        `${prefix}x-${key}`
      ] = `-${length}px 0 0 ${value}, ${length}px 0 0 ${value}`
      shadows[
        `${prefix}x-inset-${key}`
      ] = `-${length}px 0 0 ${value} inset, ${length}px 0 0 ${value} inset`
      shadows[
        `${prefix}y-${key}`
      ] = `0 -${length}px 0 ${value}, 0 ${length}px 0 ${value}`
      shadows[
        `${prefix}y-inset-${key}`
      ] = `0 -${length}px 0 ${value} inset, 0 ${length}px 0 ${value} inset`
    } else {
      Object.keys(value).forEach((valKey) => {
        shadows[
          `${prefix}${key}-${valKey}`
        ] = `0 0 0 ${length}px ${value[valKey]}`
        shadows[
          `${prefix}inset-${key}-${valKey}`
        ] = `0 0 0 ${length}px ${value[valKey]} inset`
        shadows[
          `${prefix}t-${key}-${valKey}`
        ] = `0 -${length}px 0 ${value[valKey]}`
        shadows[
          `${prefix}t-inset-${key}-${valKey}`
        ] = `0 ${length}px 0 ${value[valKey]} inset`
        shadows[
          `${prefix}b-${key}-${valKey}`
        ] = `0 ${length}px 0 ${value[valKey]}`
        shadows[
          `${prefix}b-inset-${key}-${valKey}`
        ] = `0 -${length}px 0 ${value[valKey]} inset`
        shadows[
          `${prefix}r-${key}-${valKey}`
        ] = `${length}px 0 0 ${value[valKey]}`
        shadows[
          `${prefix}r-inset-${key}-${valKey}`
        ] = `-${length}px 0 0 ${value[valKey]} inset`
        shadows[
          `${prefix}l-${key}-${valKey}`
        ] = `-${length}px 0 0 ${value[valKey]}`
        shadows[
          `${prefix}l-inset-${key}-${valKey}`
        ] = `${length}px 0 0 ${value[valKey]} inset`
        shadows[
          `${prefix}x-${key}-${valKey}`
        ] = `-${length}px 0 0 ${value[valKey]}, ${length}px 0 0 ${value[valKey]}`
        shadows[
          `${prefix}x-inset-${key}-${valKey}`
        ] = `-${length}px 0 0 ${value[valKey]} inset, ${length}px 0 0 ${value[valKey]} inset`
        shadows[
          `${prefix}y-${key}-${valKey}`
        ] = `0 -${length}px 0 ${value[valKey]}, 0 ${length}px 0 ${value[valKey]}`
        shadows[
          `${prefix}y-inset-${key}-${valKey}`
        ] = `0 -${length}px 0 ${value[valKey]} inset, 0 ${length}px 0 ${value[valKey]} inset`
      })
    }
  })
})

module.exports = {
  // 对以下文件进行 className 的 tree-shaking，支持字面量与三元
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  important: "body",
  darkMode: false, // or 'media' or 'class'
  theme: {
    // 待设计规范引入
    screens: false,
    colors,
    spacing: {
      ...spacing,
      1: "1px",
      2: "2px",
      6: "6px",
      10: "10px",
      18: "18px",
      25: "25px",
      30: "30px",
      42: "42px",
      150: "150px",
      800: "800px",
    },
    backgroundColor: (theme) => theme("colors"),
    // 可加入 gradients，待设计规范引入
    backgroundImage: {
      none: "none",
    },
    backgroundOpacity: (theme) => theme("opacity"),
    // 暂且无用
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
    },
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.200", "currentColor"),
    }),
    borderOpacity: (theme) => theme("opacity"),
    borderRadius: {
      none: "0px",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      24: "24px",
      52: "52px",
      full: "9999px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    boxShadow: {
      none: "none",
      0: "0 0 0 1px rgba(223, 223, 223, 0.45)",
      1: "0 0 0 1px rgba(223, 223, 223, 0.5), 0 3px 6px 0 rgba(0, 0, 0, 0.04)",
      2: "0 0 0 1px rgba(219, 219, 219, 0.55),0 3px 5px 0 rgba(0, 0, 0, 0.05), 0 6px 15px 0 rgba(0, 0, 0, 0.05)",
      3: "0 0 0 1px rgba(219, 219, 219, 0.7), 0 8px 20px 0 rgba(0, 0, 0, 0.08), 0 4px 10px 0 rgba(0, 0, 0, 0.07)",
      4: "0 0 0 1px rgba(107, 107, 107, 0.15), 0 10px 36px 0 rgba(0, 0, 0, 0.1), 0 6px 15px 0 rgba(0, 0, 0, 0.07)",
      ...shadows,
    },
    container: false,
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      "not-allowed": "not-allowed",
    },
    // 暂且无用
    divideColor: false,
    divideOpacity: false,
    divideWidth: false,
    fill: { current: "currentColor" },
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none",
    },
    flexGrow: {
      0: "0",
      DEFAULT: "1",
    },
    flexShrink: {
      0: "0",
      DEFAULT: "1",
    },
    // 不提供 fontFamily
    fontFamily: false,
    // 不提供 fontSize + lineHeight 的组合
    fontSize: {
      12: "12px",
      13: "13px",
      14: "14px",
      16: "16px",
      17: "17px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      28: "28px",
      30: "30px",
      32: "32px",
      36: "36px",
      40: "40px",
      42: "42px",
      48: "48px",
    },
    fontWeight: {
      // thin: "100",
      // extralight: "200",
      // light: "300",
      normal: "400",
      medium: "500",
      // semibold: "600",
      bold: "600",
    },
    gap: (theme) => theme("spacing"),
    gradientColorStops: (theme) => theme("colors"),
    gridAutoColumns: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      fr: "minmax(0, 1fr)",
    },
    gridAutoRows: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      fr: "minmax(0, 1fr)",
    },
    gridColumn: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      "span-9": "span 9 / span 9",
      "span-10": "span 10 / span 10",
      "span-11": "span 11 / span 11",
      "span-12": "span 12 / span 12",
      "span-full": "1 / -1",
    },
    gridColumnEnd: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
    },
    gridColumnStart: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
    },
    gridRow: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-full": "1 / -1",
    },
    gridRowStart: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
    },
    gridRowEnd: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
    },
    gridTemplateColumns: {
      none: "none",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
      7: "repeat(7, minmax(0, 1fr))",
      8: "repeat(8, minmax(0, 1fr))",
      9: "repeat(9, minmax(0, 1fr))",
      10: "repeat(10, minmax(0, 1fr))",
      11: "repeat(11, minmax(0, 1fr))",
      12: "repeat(12, minmax(0, 1fr))",
    },
    gridTemplateRows: {
      none: "none",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
    },
    height: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      full: "100%",
      screen: "100vh",
    }),
    inset: (theme, { negative }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...negative(theme("spacing")),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      full: "100%",
      "-1/2": "-50%",
      "-1/3": "-33.333333%",
      "-2/3": "-66.666667%",
      "-1/4": "-25%",
      "-2/4": "-50%",
      "-3/4": "-75%",
      "-full": "-100%",
    }),
    keyframes: false,
    letterSpacing: {
      0: "0",
      0.5: "0.5px",
      1: "1px",
      2: "2px",
      4: "4px",
    },
    lineHeight: {
      none: "1",
      12: "12px",
      14: "14px",
      16: "16px",
      17: "17px",
      18: "18px",
      20: "20px",
      24: "24px",
      25: "25px",
      28: "28px",
      32: "32px",
      36: "36px",
      40: "40px",
      42: "42px",
      48: "48px",
      52: "52px",
      64: "64px",
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
    },
    margin: (theme, { negative }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...negative(theme("spacing")),
    }),
    maxHeight: (theme) => ({
      ...theme("spacing"),
      full: "100%",
      screen: "100vh",
      initial: "initial",
    }),
    maxWidth: (theme, { breakpoints }) => ({
      ...theme("spacing"),
      full: "100%",
      screen: "100vw",
      initial: "initial",
      ...breakpoints(theme("screens")),
    }),
    minHeight: (theme) => ({
      ...theme("spacing"),
      full: "100%",
      screen: "100vh",
    }),
    minWidth: (theme) => ({
      ...theme("spacing"),
      full: "100%",
      screen: "100vw",
    }),
    // 暂且无用
    objectPosition: false,
    opacity: {
      0: "0",
      5: "0.05",
      10: "0.1",
      20: "0.2",
      25: "0.25",
      30: "0.3",
      40: "0.4",
      50: "0.5",
      60: "0.6",
      70: "0.7",
      75: "0.75",
      80: "0.8",
      90: "0.9",
      95: "0.95",
      100: "1",
    },
    // 暂且无用
    order: false,
    // 暂且无用
    outline: false,
    padding: (theme) => ({
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      full: "100%",
    }),
    // 暂且无用
    placeholderColor: false,
    // 暂且无用
    placeholderOpacity: false,
    ringColor: (theme) => ({
      DEFAULT: theme("colors.blue.500", "#3b82f6"),
      ...theme("colors"),
    }),
    ringOffsetColor: (theme) => theme("colors"),
    ringOffsetWidth: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    ringOpacity: (theme) => ({
      DEFAULT: "0.5",
      ...theme("opacity"),
    }),
    ringWidth: {
      DEFAULT: "3px",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px",
    },
    rotate: {
      0: "0",
      "-180": "-180deg",
      "-90": "-90deg",
      "-45": "-45deg",
      45: "45deg",
      90: "90deg",
      180: "180deg",
    },
    scale: {
      0: "0",
      25: "0.25",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
    },
    // 暂且无用
    skew: false,
    space: (theme, { negative }) => ({
      ...theme("spacing"),
      ...negative(theme("spacing")),
    }),
    // 暂且无用
    stroke: false,
    // 暂且无用
    strokeWidth: false,
    textColor: (theme) => theme("colors"),
    textOpacity: (theme) => theme("opacity"),
    transformOrigin: {
      center: "center",
      top: "top",
      "top-right": "top right",
      right: "right",
      "bottom-right": "bottom right",
      bottom: "bottom",
      "bottom-left": "bottom left",
      left: "left",
      "top-left": "top left",
    },
    transitionDelay: {
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      450: "450ms",
      500: "500ms",
      600: "600ms",
      1000: "1000ms",
    },
    transitionDuration: {
      DEFAULT: "150ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      450: "450ms",
      500: "500ms",
      600: "600ms",
      1000: "1000ms",
    },
    transitionProperty: {
      none: "none",
      all: "all",
      DEFAULT:
        "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      colors: "background-color, border-color, color, fill, stroke",
      opacity: "opacity",
      shadow: "box-shadow",
      transform: "transform",
      width: "width",
      height: "height",
    },
    transitionTimingFunction: {
      DEFAULT: "cubic-bezier(0.42, 0, 0.58, 1)",
      linear: "linear",
      in: "cubic-bezier(0.42, 0, 1, 1)",
      "in-cubic": "cubic-bezier(0.4, 0, 0.68, 0.53)",
      "in-quint": "cubic-bezier(0.52, 0, 0.74, 0.5)",
      out: "cubic-bezier(0, 0, 0.58, 1)",
      "out-cubic": "cubic-bezier(0.32, 0.47, 0.6, 1)",
      "out-quint": "cubic-bezier(0.22, 0.5, 0.36, 1)",
      "in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
      "in-out-cubic": "cubic-bezier(0.66, 0, 0.34, 1)",
      "in-out-quint": "cubic-bezier(0.84, 0, 0.16, 1)",
      brand: "cubic-bezier(0.4, 0, 0.15, 1)",
    },
    translate: (theme, { negative }) => ({
      ...theme("spacing"),
      ...negative(theme("spacing")),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      full: "100%",
      "-1/2": "-50%",
      "-1/3": "-33.333333%",
      "-2/3": "-66.666667%",
      "-1/4": "-25%",
      "-2/4": "-50%",
      "-3/4": "-75%",
      "-full": "-100%",
    }),
    width: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      screen: "100vw",
    }),
    zIndex: {
      auto: "auto",
      0: "0",
      1: "1",
      2: "2",
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50",
      1029: "1029",
      1030: "1030",
      1031: "1031",
      1040: "1040",
      1060: "1060",
      1080: "1080",
      1090: "1090",
    },
  },
  variantOrder: [
    "first",
    "last",
    "odd",
    "even",
    "visited",
    "checked",
    "group-hover",
    "group-focus",
    "focus-within",
    "hover",
    "focus",
    "focus-visible",
    "active",
    "disabled",
  ],
  variants: {
    accessibility: ["responsive", "focus-within", "focus"],
    alignContent: ["responsive"],
    alignItems: ["responsive"],
    alignSelf: ["responsive"],
    animation: ["responsive"],
    appearance: ["responsive"],
    backgroundAttachment: ["responsive"],
    backgroundClip: ["responsive"],
    backgroundColor: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
      "active",
    ],
    backgroundImage: ["responsive"],
    backgroundOpacity: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
      "active",
    ],
    backgroundPosition: ["responsive"],
    backgroundRepeat: ["responsive"],
    backgroundSize: ["responsive"],
    borderCollapse: ["responsive"],
    borderColor: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
      "active",
    ],
    borderOpacity: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
      "active",
    ],
    borderRadius: ["responsive"],
    borderStyle: ["responsive"],
    borderWidth: ["responsive"],
    boxShadow: ["responsive", "group-hover", "focus-within", "hover", "focus"],
    boxSizing: ["responsive"],
    clear: ["responsive"],
    container: ["responsive"],
    cursor: ["responsive"],
    display: ["responsive"],
    divideColor: ["responsive", "dark"],
    divideOpacity: ["responsive", "dark"],
    divideStyle: ["responsive"],
    divideWidth: ["responsive"],
    fill: ["responsive"],
    flex: ["responsive"],
    flexDirection: ["responsive"],
    flexGrow: ["responsive"],
    flexShrink: ["responsive"],
    flexWrap: ["responsive"],
    float: ["responsive"],
    fontFamily: ["responsive"],
    fontSize: ["responsive"],
    fontSmoothing: ["responsive"],
    fontStyle: ["responsive"],
    fontVariantNumeric: ["responsive"],
    fontWeight: ["responsive", "hover"],
    gap: ["responsive"],
    gradientColorStops: ["responsive", "dark", "hover", "focus"],
    gridAutoColumns: ["responsive"],
    gridAutoFlow: ["responsive"],
    gridAutoRows: ["responsive"],
    gridColumn: ["responsive"],
    gridColumnEnd: ["responsive"],
    gridColumnStart: ["responsive"],
    gridRow: ["responsive"],
    gridRowEnd: ["responsive"],
    gridRowStart: ["responsive"],
    gridTemplateColumns: ["responsive"],
    gridTemplateRows: ["responsive"],
    height: ["responsive"],
    inset: ["responsive"],
    justifyContent: ["responsive"],
    justifyItems: ["responsive"],
    justifySelf: ["responsive"],
    letterSpacing: ["responsive"],
    lineHeight: ["responsive"],
    listStylePosition: ["responsive"],
    listStyleType: ["responsive"],
    margin: ["responsive"],
    maxHeight: ["responsive"],
    maxWidth: ["responsive"],
    minHeight: ["responsive"],
    minWidth: ["responsive"],
    objectFit: ["responsive"],
    objectPosition: ["responsive"],
    opacity: ["responsive", "group-hover", "focus-within", "hover", "focus"],
    order: ["responsive"],
    outline: ["responsive", "focus-within", "focus"],
    overflow: ["responsive"],
    overscrollBehavior: ["responsive"],
    padding: ["responsive"],
    placeContent: ["responsive"],
    placeItems: ["responsive"],
    placeSelf: ["responsive"],
    placeholderColor: ["responsive", "dark", "focus"],
    placeholderOpacity: ["responsive", "dark", "focus"],
    pointerEvents: ["responsive"],
    position: ["responsive"],
    resize: ["responsive"],
    ringColor: [
      "responsive",
      "dark",
      "focus-within",
      "focus",
      "hover",
      "active",
    ],
    ringOffsetColor: [
      "responsive",
      "dark",
      "focus-within",
      "focus",
      "hover",
      "active",
    ],
    ringOffsetWidth: ["responsive", "focus-within", "focus", "hover", "active"],
    ringOpacity: [
      "responsive",
      "dark",
      "focus-within",
      "focus",
      "hover",
      "active",
    ],
    ringWidth: ["responsive", "focus-within", "focus", "hover", "active"],
    rotate: ["responsive", "hover", "focus"],
    scale: ["responsive", "hover", "focus"],
    skew: ["responsive", "hover", "focus"],
    space: ["responsive"],
    stroke: ["responsive"],
    strokeWidth: ["responsive"],
    tableLayout: ["responsive"],
    textAlign: ["responsive"],
    textColor: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
      "active",
    ],
    textDecoration: [
      "responsive",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
      "active",
    ],
    textOpacity: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
      "active",
    ],
    textOverflow: ["responsive"],
    textTransform: ["responsive"],
    transform: ["responsive"],
    transformOrigin: ["responsive"],
    transitionDelay: ["responsive"],
    transitionDuration: ["responsive"],
    transitionProperty: ["responsive"],
    transitionTimingFunction: ["responsive"],
    translate: ["responsive", "hover", "focus"],
    userSelect: ["responsive"],
    verticalAlign: ["responsive"],
    visibility: ["responsive", "hover", "focus", "group-hover"],
    whitespace: ["responsive"],
    width: ["responsive"],
    wordBreak: ["responsive"],
    zIndex: ["responsive", "focus-within", "focus"],
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".overflow-overlay": {
          overflow: "overlay",
          "&::-webkit-scrollbar": {
            width: "14px",
            height: "14px",
          },

          "&::-webkit-scrollbar-thumb": {
            "min-width": "14px",
            "min-height": "14px",
            "background-color": "rgba(0, 0, 0, 0.15)",
            "background-clip": "content-box",
            border: "4px solid transparent",
            "border-radius": "14px",
          },

          "&::-webkit-scrollbar-track": {
            "background-color": "rgba(0, 0, 0, 0)",
          },

          "&::-webkit-scrollbar-thumb:hover": {
            "background-color": "rgba(0, 0, 0, 0.4)",
          },

          "&::-webkit-scrollbar-thumb:active": {
            "background-color": "rgba(0, 0, 0, 0.65)",
          },
          "&::-webkit-scrollbar-track": {
            "background-color": "rgba(0, 0, 0, .0)",
          },
        },
      }

      addUtilities(newUtilities, [])
    }),
    plugin(
      function ({ addUtilities, theme, variants, e }) {
        const values = theme("lineClamp")

        addUtilities(
          [
            Object.entries(values).map(([key, value]) => {
              return {
                [`.${e(`line-clamp-${key}`)}`]: {
                  overflow: "hidden",
                  display: "-webkit-box",
                  "text-overflow": "ellipsis",
                  "-webkit-box-orient": "vertical",
                  "-webkit-line-clamp": `${value}`,
                  "line-clamp": `${value}`,
                },
              }
            }),
            {
              ".line-clamp-none": {
                "-webkit-line-clamp": "unset",
              },
            },
          ],
          variants("lineClamp")
        )
      },
      {
        theme: {
          lineClamp: {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
          },
        },
        variants: {
          lineClamp: ["responsive"],
        },
      }
    ),
  ],
}
