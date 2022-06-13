const express = require ("express")
const app = express()
const mongoose = require("mongoose")
const UserModel = require("./models/Users");

const cors = require("cors")

// mongoose.connect("");



app.use(express.json());
app.use(cors());


app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
      if (err) {
         res.json(err);
      } else {
         res.json(result);
      }
    });
  });

  app.post("/createUser", async(req,res)=>{
    const data = req.body;
    const newData = new UserModel(data);

    await newData.save();
    console.log(res.json(data));

  })
  


app.listen(3001,()=>{
    console.log("server Runs perfectly");
});