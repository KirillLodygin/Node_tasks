const http = require('http');
const host = 'localhost';
const port = 8080;

const serverState = {
  likes: 25,
};

const requestListener = function (req, res) {
  res.setHeader('Content-type', 'application/json');

  switch (req.url) {
    case '/like':
      serverState.likes += 1;
      res.writeHead(200);
      res.write(JSON.stringify({ status: 'ok' }));
      res.end();
      break;

    case '/dislike':
      serverState.likes -= 1;
      res.writeHead(200);
      res.write(JSON.stringify({ status: 'ok' }));
      res.end();
      break;

    case '/stats':
      res.writeHead(200);
      res.write(
        JSON.stringify({
          status: 'ok',
          likes: serverState.likes,
        }),
      );
      res.end();
      break;

    default:
      res.writeHead(200);
      res.write(JSON.stringify({ status: 'error' }));
  }
};

http.createServer(requestListener).listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
