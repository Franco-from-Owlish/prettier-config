/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 120,
  tabWidth: 2,
  tabs: false,
  semi: true,
  singleQuote: false,
  quoteProps: "consistent",
  jsxSingleQuote: false,
  trailingComma: "all",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: true,
  proseWrap: "always",
  htmlWhitespaceSensitivity: "css",
  vueIndentScriptAndStyle: true,
  endOfLine: "lf",
  embeddedLanguageFormatting: "auto",
  singleAttributePerLine: true,
};

export default config;
