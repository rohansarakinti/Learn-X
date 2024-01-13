const express = require('express');
const { MongoClient, ServerApiVersion} = require('mongodb');
const config = require('dotenv').config();

const app = express();
const port = 3000;

const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASS;

console.log("URI: " + `mongodb+srv://${mongoUser}:${mongoPassword}@learnx-cluster.o6zku0d.mongodb.net/?retryWrites=true&w=majority`);
const client = new MongoClient(`mongodb+srv://${mongoUser}:${mongoPassword}@learnx-cluster.o6zku0d.mongodb.net/?retryWrites=true&w=majority`, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

async function initiateConnection() {
    try {
      await client.connect();
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      await client.close();
    }
}

initiateConnection().catch(console.dir);

app.get('/api/status', (req, res) => {
    res.status(200).send('OK');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
