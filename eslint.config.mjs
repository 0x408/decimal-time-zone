import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
    {
        rules: {
            "eqeqeq": ["error", "always"],
            "no-console": "warn",
            "no-lonely-if": "error",
            "no-unused-vars": ["warn"],
            "no-useless-rename": "error",
            "prefer-const": "error",
            "require-await": "error",
            "vue/html-indent": ["error", 4],
            "@stylistic/comma-dangle": ["error", "never"],
            "@stylistic/indent": ["error", 4],
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/semi": ["error", "always"],
            "@stylistic/semi-style": ["error", "last"]
        }
    }
);
