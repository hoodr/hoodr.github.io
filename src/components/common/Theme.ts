const breakpoints = ["30em", "40em", "52em", "64em", "80em"];

// aliases - which typescript hates
// [
//   breakpoints.xsm,
//   breakpoints.sm,
//   breakpoints.md,
//   breakpoints.lg,
//   breakpoints.xl,
// ] = breakpoints;

export default {
  colors: {
    black: "#000e1a",
    white: "#fff",
    blue: "#007ce0",
    navy: "#004175",
  },
  fonts: {
    std: "IBM Plex Sans",
  },
  breakpoints,
  space: [0, 4, 8, 16, 32, 64],
};
