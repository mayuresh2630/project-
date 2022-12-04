const { ExcelModel } = require("../models/excel");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("test");
  console.log("test1", genres);
  try {
    const excelData = await ExcelModel.find();
    res.send({status:true,data:excelData});
  } catch (error) {
    res.send({status:false,error})
  }
});

router.get("/bydept", async (req, res) => {
  try {
    const excelData = await ExcelModel.find({ Dept: req.query.dept });
  res.send({status:true,data:excelData});
  } catch (error) {
    
    res.send({status:false,error})
  }
});

router.get("/filter", async (req, res) => {
  try {
    let temp = {};
  const { query } = req;
  if (query.dept) {
    temp.Dept = query.dept;
  }
  if (query.fromDate && query.toDate) {
    temp.DateJoin = {
      $gte: new Date(new Date(req.query.fromDate).setHours(00, 00, 00)),
      $lt: new Date(new Date(req.query.toDate).setHours(23, 59, 59)),
    };
  }
  console.log("test", temp);
  const excelData = await ExcelModel.find(temp);
   console.log("excelData",excelData)
  res.send({status:true,data:excelData});
    
  } catch (error) {
    res.send({status:false,error})
  }
  
});
router.get("/bydate", async (req, res) => {
  console.log("test", req);
  const genres = await ExcelModel.find({
    DateJoin: {
      $gte: new Date(new Date(req.query.fromDate).setHours(00, 00, 00)),
      $lt: new Date(new Date(req.query.toDate).setHours(23, 59, 59)),
    },
  });
  //   console.log("test1",genres)
  res.send(genres);
});

module.exports = router;
