const express=require('express');
const {MongoClient}=require("mongodb");
const path=require('path');
require("dotenv").config({path:'./.env'});

const client=new MongoClient(process.env.uri)

const app=express();

// console.log(__dirname,process.env.uri);

async function connectDB(){
    // await client.connect();
    try {
        const db=client.db('vignesh');
        const movies=db.collection('movies');
    // let result=await movies.deleteMany({name:"24"});
        let result=await movies.insertOne({name:"24",actor:'surya'});
        console.log(`successfully inserted ${result}`);
    } finally {
        client.close;
    }
}  

connectDB();

app.listen(3000);

