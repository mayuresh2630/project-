const express = require("express");
const app = express();
const cors=require("cors");
const mongoose = require("mongoose");
const ExcelModel = require("./models/excel");
const User = require("./models/Loginschema")
const { Excel } = require("./models/excel");
const excels = require('./routes/excels');
//const express = require("express");
const router = express.Router();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded())

/// DATABASE CONNECTION
mongoose.connect(
  "mongodb://localhost:27017/ExcelDb?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
  { useNewUrlParser: true}
);


/*mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})*/


app.post("/insert", async (req, res) => {
  //app.use(bodyParser.urlencoded({extended:false}));
  const fileData=req.body.data; 
  console.log("backend",fileData);
 // fileData=XLSX.utils.sheet_to_json(workbook.Sheets[sheet_namelist[x]]);
  try {
    //const Excel=new ExcelModel({fileData:fileData});
  ExcelModel.insertMany(fileData,(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})
  
  res.send("Inserted DATA");
  } catch (error) {
    res.send(error);
    console.log("error",error)
  }

  
});

app.post("/Login", (req, res)=> {
  const { email, password} = req.body
  User.findOne({ email: email}, (err, user) => {
      if(user){
          if(password === user.password ) {
              res.send({message: "Login Successfull", user: user})
          } else {
              res.send({ message: "Password didn't match"})
          }
      } else {
          res.send({message: "User not registered"})
      }
  })
}) 

app.post("/Register",(req, res)=> {
  const { name, email, password} = req.body;
  //const password = await bcrypt.hash(plainTextPassword,salt);
  User.findOne({email: email}, (err, user) => {
      if(user){
          res.send({message: "User already registerd"})
      } else {
          const user = new User({
              name,
              email,
              password
          })
          
          user.save(err => {
              if(err) {
                  res.send(err)
              } else {
                  res.send( { message: "Successfully Registered, Please login now." })
              }
          })
      }
  })
  
})

// router.get("/", async (req, res) => {
//     console.log("test");
//     console.log("test1", genres);
//     try {
//       const excelData = await ExcelModel.find();
//       res.send({status:true,data:excelData});
//     } catch (error) {
//       res.send({status:false,error})
//     }
//   });
  
//   router.get("/bydept", async (req, res) => {
//     try {
//       const excelData = await ExcelModel.find({ Dept: req.query.dept });
//     res.send({status:true,data:excelData});
//     } catch (error) {
      
//       res.send({status:false,error})
//     }
//   });
  
//   router.get("/filter", async (req, res) => {
//     try {
//       let temp = {};
//     const { query } = req;
//     if (query.dept) {
//       temp.Dept = query.dept;
//     }
//     if (query.fromDate && query.toDate) {
//       temp.DateJoin = {
//         $gte: new Date(new Date(req.query.fromDate).setHours(00, 00, 00)),
//         $lt: new Date(new Date(req.query.toDate).setHours(23, 59, 59)),
//       };
//     }
//     console.log("test", temp);
//     const excelData = await ExcelModel.find(temp);
//     //   console.log("test1",genres)
//     res.send({status:true,data:excelData});
      
//     } catch (error) {
//       res.send({status:false,error})
//     }
    
//   });
//   router.get("/bydate", async (req, res) => {
//     console.log("test", req);
//     const genres = await ExcelModel.find({
//       DateJoin: {
//         $gte: new Date(new Date(req.query.fromDate).setHours(00, 00, 00)),
//         $lt: new Date(new Date(req.query.toDate).setHours(23, 59, 59)),
//       },
//     });
//     //   console.log("test1",genres)
//     res.send(genres);
//   });

// module.exports = router;
app.use('/api/excels', excels);
app.listen(4000, () => {
  console.log("You are connected!");
});