import express from "express";

// This will help us connect to the database
import db from "../db/connection.js";

// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

// This section will help you get a list of all the consultation_call.
router.get("/", async (req, res) => {
  let collection = await db.collection("customer_info.consultation_call");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

router.post("/", async (req, res) => {
  try {
    let newDocument = {
      name: req.body.name,
      date:  req.body.date,
      time:  req.body.time,
      email: req.body.email,
      query: req.body.query,

    };
    let collection = await db.collection("customer_info.consultation_call");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(201);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding record");
  }
});


export default router;

