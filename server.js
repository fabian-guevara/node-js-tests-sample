const http = require("http");

const port = process.env.PORT || 3000;

http
  .createServer((_req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("ok\n");
  })
  .listen(port, () => console.log(`listening on ${port}`));