const http = require('http');
const port = process.env.PORT || 3000;

app.listen(port, () => {console.log(`Server is running on port ${port}`);
});


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  const msg = 'Hello Node to evetryone!\n'
  res.end(msg);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
