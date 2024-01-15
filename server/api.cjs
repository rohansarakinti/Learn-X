const express = require('express');
const { MongoClient, ServerApiVersion, UUID} = require('mongodb');
const config = require('dotenv').config();
const sha256 = require('sha256');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: 'false'}))
app.use(express.json())

const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASS;

let client_tokens = [];

app.use(cors({
    origin: '*'
}));

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
      console.log("Established Connection to Database.");
    } finally {

    }
}

initiateConnection().catch(console.dir);

app.post('/api/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (email == null || password == null) {
        res.status(400).send('Bad Request');
    }

    let hashedPassword = Buffer.from(sha256(password)).toString('base64');
    client.db("LearnX").collection('Users').findOne({email: email, password: hashedPassword}).then((result, err) => {
        if (err) {
            res.status(500).send('Internal Server Error');
        } else if (result == null) {
            res.status(401).send('Unauthorized');
        } else {
            let token = Buffer.from(sha256(uuidv4())).toString('base64'); // Generate a random token
            client_tokens.push(token); 
            res.status(200).send(token); // Send the token to the client
        }
    });
});

app.post('/api/register', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (email == null || password == null) {
        res.status(400).send('Bad Request');
    }

    let hashedPassword = Buffer.from(sha256(password)).toString('base64');
    let userExists = client.db("LearnX").collection('Users').findOne({email: email, password: hashedPassword});

    userExists.then((result) => {
        console.log(result);
        if (result) {
            res.status(409).send('Conflict');
        }
        else {
            client.db("LearnX").collection('Users').insertOne({email: email, password: hashedPassword}).then((result) => {
                res.status(200).send('OK');
            });
        }
    });
})

app.get('/api/status', (req, res) => {
    res.status(200).send('OK');
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

app.on('close', () => {
    client.close();
})
