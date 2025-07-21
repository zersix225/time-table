import antfu from "@antfu/eslint-config"
import oxlint from "eslint-plugin-oxlint"
import perfectionist from "@antfu/eslint-config"

const antfuConfig = antfu(
    {
        formatters: true,
        react: true,
        stylistic: {
            indent: 2,
            quotes: "double",
            semi: false,
        },
        typescript: true,
    },
    {
        plugins: [
            perfectionist,
            oxlint.configs["flat/all"],
        ],
        rules: {
            "no-console": "warn",
            "perfectionist/sort-objects": "error",
            "react/no-nested-components": "off",
            "ts/consistent-type-definitions": "off",
            "unicorn/throw-new-error": "off",
            "unused-imports/no-unused-imports": "error",
        },
    },
    {
        ignores: [
            "**/*.json",
        ],
    },
)

/** @type {import("eslint").Linter.Config} */
export default antfuConfig