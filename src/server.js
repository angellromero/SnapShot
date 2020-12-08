const ReactDOMServer = require("react-dom/server");
const App = require("../src/App");

module.exports = function server(request, response) {
  const html = ReactDOMServer.renderToString(
    React.createElement(App, { url: request.url })
  );
  response.set("Content-Type", "text/html");
  response.send(html);
};
