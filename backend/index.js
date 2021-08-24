/* socket\app.js */
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"]
  }
});

const sockets = {
  'channel1': io.of('channel1'),
  'channel2': io.of('channel2'),
}

const msgs = {
  'channel1': [],
  'channel2': [],
};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const handleSockets = (namespace, socket) => {
  socket.on('connection', (socket) => {
    console.log(`a user connected on ${namespace}`);
    msgs[namespace].map((msg) => socket.emit('chat message', msg));

    socket.on('chat message', (msg) => {
      console.log(`${namespace}: ${msg}`);
      const newMsg = { msg, date: Date.now() };
      msgs[namespace].push(newMsg);
      socket.emit('chat message', newMsg);
    });

    socket.on('disconnect', () => {
      console.log(`user disconnected on ${namespace}`);
    });
  });
}

handleSockets('channel1', sockets['channel1']);
handleSockets('channel2', sockets['channel2']);

http.listen(3000, () => {
  console.log('Connected at 3000');
});
