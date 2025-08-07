import type { StorybookConfig } from "@storybook-vue/nuxt";

const config: StorybookConfig = {
  stories: [
    "../components/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  addons: [],
  framework: {
    name: "@storybook-vue/nuxt",
    options: {},
  },
};
export default config;
