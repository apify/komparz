// Kudos to @mato
// https://my-featuremoretrackingidsforsmartlook.apify.com/admin/users/2vgMdoFg6jKkX4kBB/actors/h5BQU0zyyZlSQrm7j#/

const WebSocket = require('ws');

const {
  APIFY_CONTAINER_PORT,
  APIFY_CONTAINER_URL,
} = process.env;

const wss = new WebSocket.Server({ port: APIFY_CONTAINER_PORT });
wss.on('connection', (connection) => {
  connection.on('message', (message) => {
    console.log(`Received message "${message}"`)
    if (message.indexOf('end') !== -1) {
      console.log("Closing connection");
      connection.close();
    } else {
      connection.send(`Received ${message}`)
    }
  });
  connection.send('Hello world');
});

console.log(`Application is listening at URL ${APIFY_CONTAINER_URL}.`);
