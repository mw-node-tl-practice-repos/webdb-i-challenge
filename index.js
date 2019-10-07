const server = require('./server.js');

const PORT = process.env.PORT || 8000;

server.get('/', (req, res) => {
  res.status(200).json({message: "Server is running!"})
})
server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});