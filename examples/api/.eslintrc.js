module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    // Desactiva errores de indentación
    indent: "off",
    // Desactiva errores de prettier si lo usas
    "prettier/prettier": "off",
    // Permite comillas dobles
    quotes: "off",
    // Permite saltos de línea en formato CRLF
    "linebreak-style": ["error", "windows"],
  },
};
