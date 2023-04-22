import { style, keyframes } from "@vanilla-extract/css";

export const headerStyle = {
  header: style({
    display: "flex",
    width: "100%",
    backgroundColor: "lightpink",
  }),
};

export const cardStyle = {
  simpleCard: style({
    backgroundColor: "white",
    borderRadius: "4px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "16px",
    transition: "background-color 0.3s",

    ":hover": {
      backgroundColor: "lightblue",
      cursor: "pointer",
    },
  }),
};

const moveRightToLeft = keyframes({
  "0%": {
    transform: "translateX(100%)",
  },
  "100%": {
    transform: "translateX(-100%)",
  },
});

export const movingCardStyle = style({
  position: "absolute",
  top: "30%",
  animationName: moveRightToLeft,
  animationDuration: "10s", // Adjust the duration to control the speed of the animation
  animationIterationCount: "infinite", // Repeat the animation indefinitely
});

export const responsiveHeading = style({
  fontSize: 'clamp(50px, 10vw, 100px)', // Font size between 1.5rem and 2rem, scaling with viewport width
  lineHeight: 1.3,
  fontWeight: 700,
  margin: '0 0 1rem',
});
