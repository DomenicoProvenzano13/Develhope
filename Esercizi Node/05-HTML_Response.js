import { createServer } from "node:http";

const server = createServer((req, res) => {
  console.log("request received");

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  const jsonResponseBody = JSON.stringify({
    message: "Buongiorno a chi legge.",
  });

  res.end(jsonResponseBody);
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
