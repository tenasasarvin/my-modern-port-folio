/* eslint-env node */
export default {
  rules: {
    "at-rule-no-unknown": [true, { ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen"] }]
  }
};