/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@chromatic-com/storybook",
        "@storybook/addon-vitest",
        "@storybook/addon-a11y",
        "@storybook/addon-docs",
        "@storybook/addon-onboarding",
    ],
    framework: "@storybook/react-vite",

    refs: {
        "design-system": {
            title: "Storybook Design System",
            url: "https://master--5ccbc373887ca40020446347.chromatic.com/",
            expanded: false, // Optional, true by default,
            sourceUrl: "https://github.com/storybookjs/storybook", // Optional
        },
        react: {
            title: "React",
            url: "http://localhost:7007",
        },
        vue: {
            title: "vue",
            url: "http://localhost:7008",
        },
    },
};
export default config;
