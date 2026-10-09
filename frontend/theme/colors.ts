export const colors = {
  cream: "#FFF8F0",
  creamDark: "#F5EBE0",
  orange: "#E85D04",
  /** Title orange (#E85D04) at 0–1 opacity — glass, shadows, radial */
  orangeAlpha: (opacity: number) => `rgba(232, 93, 4, ${opacity})`,
  orangeLight: "#F48C06",
  amber: "#FFBA08",
  ember: "#DC2F02",
  charcoal: "#2D2A26",
  muted: "#6B6560",
  white: "#FFFFFF",
  bubbleFill: "#FFE8D6",
  bubbleBorder: "#F48C06",
  likeGreen: "#2D6A4F",
  passGray: "#495057",

  // iOS Liquid Glass design tokens (warm amber/orange caustic glass)
  glass: {
    tintStart: "rgba(255, 255, 255, 0.92)",
    tintMid: "rgba(232, 93, 4, 0.1)",
    tintEnd: "rgba(232, 93, 4, 0.17)",
    specularStart: "rgba(255, 255, 255, 0.85)",
    specularMid: "rgba(255, 255, 255, 0.20)",
    borderTop: "rgba(255, 255, 255, 0.95)",
    borderLeft: "rgba(255, 255, 255, 0.65)",
    shadow: "#E85D04",
    textCategory: "#DC2F02",
    textValue: "#1F1B18",
  },
};
