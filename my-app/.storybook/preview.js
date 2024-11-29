import './fonts.css'
import './global.css';

// .storybook/preview.js
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" }, // Automatically detect actions
  controls: { expanded: true }, // Show all controls expanded by default
  docs: {
    inlineStories: true, // Enable Docs addon with inline stories
  },
};
