module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb-hooks",
    "plugin:@typescript-eslint/recomended",
    "plugin:@typescript-eslint/recomended-requiring-type-checking",
  ],
  parserOptions: {
    debugLevel: true,
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
};
