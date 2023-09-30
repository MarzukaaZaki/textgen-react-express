// username: story-user
// password: EeFBXvi06yovufUx


// Import express from nodejs 
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()

// Creating an instance of the express application
const app = express();


// Middleware
const cors = require('cors');
app.use(cors());

app.use(express.json())

// Defines port in which the server is to be launched
// During deployment it will assign any of the available ports to our server.
const port = process.env.PORT || 5000;




const uri = `mongodb+srv://${process.env.VITE_DB_USER}:${process.env.VITE_DB_PASSWORD}@cluster0.10dhryt.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);







// Defining a URL and the response the users will get when they go to that url.
app.get('/', (request, response) =>{
    response.send('Hello from ai-react server')
})



// Set the port at which the server should listen for incoming requests
app.listen(port, ()=>{
    console.log(`My ai-react server is running on port ${port}`);
})