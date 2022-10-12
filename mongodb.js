import { MongoClient } from "mongodb";
import {uri} from "./credentials.js"
const client = new MongoClient(uri)
const db = client.db("sample_supplies")
const suppliesCollections = db.collection("supplies");

const newTool = {
    name: "hammer",
    modle: "A3",
    length: "12 inch",
};
const results = await suppliesCollections.insertOne(newTool)
console.log(results);

//console.log(newTool)