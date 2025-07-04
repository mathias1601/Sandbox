import {MongoClient, ServerApiVersion} from "mongodb";

const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

try {
    //Connect the client to the server
    await client.connect();
    //Send a ping to confirm a succesful connection
    await client.db("Trivia_LeaderBoard").command({ping : 1}); 
    console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
    );
} catch(err) {
    console.log(err);
}

let db = client.db("Trivia_LeaderBoard")

export default db;