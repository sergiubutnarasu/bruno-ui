const sass = require("@stencil/sass");

exports.config = {
  namespace: "bruno",
  outputTargets: [
    {
      type: "dist"
    },
    {
      type: "www",
      serviceWorker: false
    }
  ],
  globalStyle: 'src/globals/style.scss',
  plugins: [
    sass({
      injectGlobalPaths: ["src/globals/_common.scss"]
    })
  ]
};
