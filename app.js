import express from "express";
import fetch from "node-fetch";
import mongo from "mongoose";
import bodyParser from "body-parser";
import hbs from "hbs"

const app = express();

app.use(bodyParser.urlencoded({
  extended:true
}))

app.set("view engine","hbs");
app.set("views","views")

mongo.connect("mongodb://0.0.0.0:27017/dbrohit")
const postschema= new mongo.Schema({
  name:String,
  last:String,
  buy:String,
  sell:String,
  volume:String,
  base_unit:String
})
const post=mongo.model('rost',postschema)


// app.get('/',async (req,res)=>{
  
//   const slides= await post.find();
  
//   console.log(slides)

//   // res.render("index",{
//   //     details:details,
//   //     slides:slides,
//   //     service:service})
// })

///////////////////////////////////////////////////////////
// async function getpost(){
//   const mypost=   await fetch("https://api.wazirx.com/api/v2/tickers");
// const response= await mypost.json();
// for( var i=0;i<10;i++){
// var key= Object.keys(response)[i];
// let data = post({
// name:response[key]["name"],
// last:response[key]["last"],
// buy:response[key]["buy"],
// sell:response[key]["sell"],
// volume:response[key]["volume"],
// base_unit:response[key]["base-unit"],

// })
// // console.log(response[key]["name"])
// let result= await data.save();
// console.log(result)
// }

// }

//  async function deletedata(){
//   const del= await post.deleteMany({});

//   console.log(del)
//  }



app.get("/", async (req,res)=>{
/////////////////////////////////////////////////

// deletedata();

  //  getpost();

////////////////////////////////////////////////

  const data= await post.find();
  
  console.log(data)
  ////////////////////////////////////////////////
  res.render("index",{data:data})
 
  
})
console.log("started")
app.listen(5005);