// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuidv4 = require('uuid/v4');
// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
//setting up server to send and recieve text data
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    // if (client.readyState === SocketServer.OPEN) {
      client.send(data);
    // }
  });
};


  wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.on('message', data => {
    const clientMessage = JSON.parse(data);
    //console.log(`User ${clientMessage.username} said ${clientMessage.content}`);

    switch (clientMessage.type) {
      case 'postMessage':
    //   //copying current object and giving i and send back
        const outgoingMessage = {
          ...clientMessage,
          id: uuidv4(), 
          type: 'incomingMessage',
        };
        wss.broadcast(JSON.stringify(outgoingMessage));
        break;
      default:
        console.log('Unknown Type of Message!');
    }
  });

    // Set up a callback for when a client closes the socket. This usually means they closed their browser.
    ws.on('close', () => console.log('Client disconnected'));
    
  });

// //original code
// wss.on('connection', (ws) => {
//   console.log('Client connected');

//   ws.on('message', data => {
//     const message = JSON.parse(data);
//     console.log(`User ${message.username} said ${message.content}`);
//   });

//   // Set up a callback for when a client closes the socket. This usually means they closed their browser.
//   ws.on('close', () => console.log('Client disconnected'));
  

//   //written code??
// wsClient.on('message', data => {
//   const message = JSON.parse(data);
//   onsole.log(`User ${message.username} said ${message.content}`);

//   switch (clientMessage.type) {
//     case 'postNotification':
//       const outgoingMessage = {
//         ...clientMessage,
//         id: uuidv4(),
//         type: 'incomingNotification',
//       };
//       wss.broadcast(JSON.stringify(outgoingMessage));
//       break;
//     default:
//       console.log('Unknow Type of Message!');
//   }
// });

