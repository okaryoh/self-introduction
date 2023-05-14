module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/preset-create-react-app", "@storybook/addon-mdx-gfm", "@storybook/addon-essentials"],
  "framework": {
    name: '@storybook/react-vite',
    options: {},
  },
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  docs: {
    autodocs: true
  }
};