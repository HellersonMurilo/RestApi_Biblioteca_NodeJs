//invocando o .ENV
require("dotenv").config()

const { MongoClient } = require("mongodb");

async function connect() {

    const client = new MongoClient(process.env.MONGO_HOST)

}