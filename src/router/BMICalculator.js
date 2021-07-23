const express = require("express");
const BMIController = require("../controller/BMIController");

const router = new express.Router();

// BMI calculator API
router.post("/bmi", (req, res) => {
  try {
    let data = req.body,
      count = 0;
    const result = {};
    // Calling CalculateBMI function.
    data = BMIController.calculateBMI(data);

    // Calling CategoryAndHealthRisk function.
    data = BMIController.CategoryAndHealthRisk(data);

    //Calling countOverweight Function.
    count = BMIController.countOverweight(data);

    // Gaurd clause for checking data.
    if (!data) {
      throw new Error("No Data found!");
    }

    //Assigning data to result object.
    result.data = data;
    result.countOverWeight = count;
    // console.log("Data:", result);

    // Send response with 200 status code.
    res.status(200).send({
      success: "true",
      status: 200,
      data: result,
    });
  } catch (e) {
    // Sending response of error.
    res.status(400).send({
      success: "false",
      status: 400,
      data: e,
    });
  }
});

module.exports = router;
