// components/Accordion.css.ts
import { style } from '@vanilla-extract/css';

export const accordionStyles = {
  wrapper: style({
    marginBottom: '1rem',
  }),

  title: style({
    display: 'block',
    width: '100%',
    padding: '0.75rem 1rem',
    backgroundColor: '#f7f7f7',
    border: '1px solid #ddd',
    borderRadius: '4px',
    textAlign: 'left',
    cursor: 'pointer',
    fontWeight: 500,
    fontSize: '1rem',
    color: '#333',
    textDecoration: 'none',
    outline: 'none',
  }),

  content: style({
    maxHeight: '0', // Set the initial max-height to 0 to hide the content
    overflow: 'hidden', // Hide the overflowing content
    backgroundColor: 'white',
    borderTop: "none",
    border: "1px solid gray",
    borderBottomLeftRadius: '4px',
    borderBottomRightRadius: '4px',
    transition: 'max-height 0.2s ease-in-out', // Add a transition to the max-height property
  }),

  contentOpen: style({
    maxHeight: '1000px', // Increase the max-height when the accordion is open
  }),
};
