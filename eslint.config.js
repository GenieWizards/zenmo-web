import antfu from "@antfu/eslint-config";

export default antfu(
  {
    formatters: true,
    react: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
    ignores: [".github/ISSUE_TEMPLATE", "src/routeTree.gen.ts"],
  },
  {
    rules: {
      "no-console": ["warn"],
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      "perfectionist/sort-imports": [
        "error",
        {
          tsconfigRootDir: ".",
          newlinesBetween: "always",
        },
      ],
    },
  },
);
