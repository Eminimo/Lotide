const net = require("net");

const server = net.createServer();

server.on("connection", (client) => {
  console.log("New client connected!");
  client.write("Hello there!");

  // Set encoding and listen for data inside the connection event
  client.setEncoding("utf8"); // interpret data as text
  client.on("data", (data) => {
    console.log("Message from client: ", data);
  });
});

server.listen(3000, () => {
  console.log("Server listening on port 3000!");
});

