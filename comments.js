// Create web server
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create server
http.createServer((req, res) => {
  if (req.method === 'GET') {
    switch (req.url) {
      case '/': {
        fs.readFile(path.join(__dirname, 'index.html')