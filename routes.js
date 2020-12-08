const { Router } = require("@xdn/core/router");

const ONE_HOUR = 60 * 60;
const ONE_DAY = 24 * ONE_HOUR;
const ONE_YEAR = 365 * ONE_DAY;

const edgeOnly = {
  browser: false,
  edge: { maxAgeSeconds: ONE_YEAR },
};

const edgeAndBrowser = {
  browser: { maxAgeSeconds: ONE_YEAR },
  edge: { maxAgeSeconds: ONE_YEAR },
};

module.exports = new Router()
  .prerender([{ path: "/" }])
  // js and css assets are hashed and can be far-future cached in the browser
  .get("/:path*", ({ cache, serveStatic }) => {
    cache(edgeAndBrowser);
    serveStatic("dist/:path*");
  })
  .fallback(({ appShell }) => {
    appShell("dist/index.html");
  });
