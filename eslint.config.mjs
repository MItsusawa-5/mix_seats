// import globals from "globals";
// import tseslint from "typescript-eslint";
// import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


// export default [
//   {languageOptions: { globals: globals.browser }},
//   ...tseslint.configs.recommended,
//   pluginReactConfig,
// ];

import globals from "globals";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  {
    files: ["*.js", "*.jsx"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: globals.browser
    },
    ...pluginReactConfig.rules
  }
];
