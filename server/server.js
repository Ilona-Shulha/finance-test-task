'use strict';

const express = require('express');
const http = require('http');
const io = require('socket.io');
const cors = require('cors');

const FETCH_INTERVAL = 5000;
const PORT = process.env.PORT || 4000;

const tickers = [
  {
    title: 'Apple',
    ind: 'AAPL',
  },
  {
    title: 'Alphabet',
    ind:'GOOGL',
  },
  {
    title: 'Microsoft',
    ind:'MSFT',
  },
  {
    title: 'Amazon',
    ind:'AMZN',
  },
  {
    title: 'Facebook',
    ind:'FB',
  },
  {
    title: 'Tesla',
    ind:'TSLA',
  },
  {
    title: 'Netflix',
    ind:'NFLX',
  },
  {
    title: 'Coursera',
    ind:'COUR',
  },
  {
    title: 'Udemy',
    ind:'UDMY',
  }
];


function randomValue(min = 0, max = 1, precision = 0) {
  const random = Math.random() * (max - min) + min;
  return random.toFixed(precision);
}

function utcDate() {
  const now = new Date();
  return new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
}

function getQuotes(socket) {
  const quotes = tickers.map(ticker => {
    const price = randomValue(100, 300, 2);
    const change = randomValue(-50, 50, 2);
    const change_percent = (change * 100 / (price - change)).toFixed(2);

    return ({
    ticker,
    exchange: 'NASDAQ',
    price,
    change,
    change_percent,
    dividend: randomValue(0, 1, 2),
    yield: randomValue(0, 2, 2),
    last_trade_time: utcDate(),
  })
});

const error = new Error;
  socket.emit('ticker', quotes);
}

function trackTickers(socket) {
  // run the first time immediately
  getQuotes(socket);

  // every N seconds
  const timer = setInterval(function() {
    getQuotes(socket);
  }, FETCH_INTERVAL);

  socket.on('disconnect', function() {
    clearInterval(timer);
  });
}

const app = express();
app.use(cors());
const server = http.createServer(app);

const socketServer = io(server, {
  cors: {
    origin: "*",
  }
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

socketServer.on('connection', (socket) => {
  socket.on('start', () => {
    trackTickers(socket);
  });
});

server.listen(PORT, () => {
  console.log(`Streaming service is running on http://localhost:${PORT}`);
});
