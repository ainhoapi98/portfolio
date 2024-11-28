import customConfig from "@tools/eslint-config-custom";

export default [
  ...customConfig,
  {
    ignores: ['**/*.*js', 'dist/*'],
  }
];
