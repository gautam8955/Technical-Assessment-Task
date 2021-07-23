const express = require("express");
const BMIController = require("../controller/BMIController");

const router = new express.Router();

// BMI calculator
router.post("/bmi", (req, res) => {
  try {
    let data = req.body,
      count = 0;
    const result = {};
    data = BMIController.calculateBMI(data);
    data = BMIController.CategoryAndHealthRisk(data);
    count = BMIController.countOverweight(data);
    if (!data) {
      throw new Error("No Data found!");
    }

    result.data = data;
    result.countOverWeight = count;
    // console.log("Data:", result);

    res.status(200).send({
      success: "true",
      status: 200,
      data: result,
    });
  } catch (e) {
    res.status(400).send({
      success: "false",
      status: 400,
      data: e,
    });
  }
});

module.exports = router;
