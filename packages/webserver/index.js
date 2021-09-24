// Credits: @mato
// https://my-featuremoretrackingidsforsmartlook.apify.com/admin/users/2vgMdoFg6jKkX4kBB/actors/r28cC3JB0XbyNToqI#/

const Apify = require('apify')
const express = require('express')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const {
  APIFY_CONTAINER_PORT,
  APIFY_CONTAINER_URL,
} = process.env;

const arr = [];
for (let i = 0; i < 1000; i++) {
  arr.push(i)
}
app.get('/', (req, res) => {
  console.log("Received request");
  res.send(JSON.stringify(arr));
});

// Start the web server!
app.listen(APIFY_CONTAINER_PORT, () => {
  console.log(`Application is listening at URL ${APIFY_CONTAINER_URL}.`);
});
