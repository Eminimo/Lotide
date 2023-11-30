const http = require("http");
const PORT = 8080;

// a function which handles requests and sends response
const requestHandler = function (request, response) {
  console.log("In requestHandler");

  // Extract the path from the request
  const path = request.url;

  // Handle different paths
  if (path === "/") {
    // Home page
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Welcome");
  } else if (path === "/urls") {
    // Path /urls
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Some URLs");
  } else {
    // Other paths
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("404 Page Not Found");
  }
};

const server = http.createServer(requestHandler);
console.log("Server created");

server.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});

console.log("Last line (after .listen call)");

