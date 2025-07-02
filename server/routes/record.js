import express from "express";

//This will help us connect to the database
import db from "../db/connection.js";

//This helps convert the id from string to ObjectId for the _id
import { ObjectId } from "mongodb";

//Router is an instance of the express router.
//We use it to define our routes.
//The router will be added as a middleware and 
//will take control of requests starting with path /Users
const router = express.Router();

//This section will help you get a list of all the records.
router.get("/", async (req, res) => {
    let collection = await db.collection("Users");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
} );

//This section will help you get records by difficulty sorted by score
router.get("/:difficulty", async (req, res) => {
    let collection = await db.collection("Users");
    let query = { difficulty: req.params.difficulty};
    let result = await collection.find(query).sort({score: -1}).toArray();

    if (!result) res.send("Not found").status(404);
    else res.send(result).status(200);
});


//This section will help you create a new record
router.post("/", async (req, res) => {
    try {
        let newDocument = {
            name: req.body.name, 
            score: req.body.score,
            difficulty: req.body.dif
        };
        let collection = await db.collection("Users");
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding record");
    }
});

//This section will help you update a record by id
router.patch("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        const updates = {
            $set: {
                name: req.body.name, 
                score: req.body.score
            },
        };
				
				let collection = await db.collection("Users");
				let result = await collection.updateOne(query, updates);
				res.send(result).status(200);
    } catch(err) {
		 	console.log(err);
			console.log(err);
			res.status(500).send("Error updating record");
		}
});

//This section will help you delete a record
router.delete("/:id", async (req, res) => {
	try {
		const query = { _id: new ObjectId(req.params.id) };

		const collection = db.collection("Users	");
		let result = await collection.deleteOne(query);

		res.send(result).status(200);
	} catch(err) {
		console.log(err);
		res.status(500).send("Error deleting record");
	}
});

export default router;