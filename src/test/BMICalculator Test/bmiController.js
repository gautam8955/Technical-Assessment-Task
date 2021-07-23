const chai = require("chai");
const chaiHttp = require("chai-http");
//assetion style
chai.should();
chai.use(chaiHttp);
const bmi = require("../../controller/BMIController");
const { expect } = require("chai");

// Test Cases of BMI Calculator.
describe("Test of Controller functions of BMI Calculator", function () {
  let req = {},
    data;
  req = {
    body: [
      { Gender: "Male", HeightCm: 171, WeightKg: 96 },
      { Gender: "Male", HeightCm: 161, WeightKg: 85 },
      { Gender: "Male", HeightCm: 180, WeightKg: 77 },
      { Gender: "Female", HeightCm: 166, WeightKg: 62 },
      { Gender: "Female", HeightCm: 150, WeightKg: 70 },
      { Gender: "Female", HeightCm: 167, WeightKg: 82 },
    ],
  };

  // Test for calculateBMI function.
  describe("Test for calculateBMI function", function () {
    data = req.body;
    it("Testing for calculation of BMI", async () => {
      const response = await bmi.calculateBMI(data);
      // console.log("response", response);
      expect(response).to.be.a("array");
    });
  });

  // Test case for CategoryAndHealthRisk Function.
  describe("Test for CategoryAndHealthRisk Function", function () {
    it("Testing for finding Category and Health Risk", async () => {
      const response = await bmi.CategoryAndHealthRisk(data);
      // console.log("response2:", response);
      expect(response).to.be.a("array");
    });
  });

  // Test case for counting overweight persons.
  describe("Test for counting overweight persons", function () {
    it("Testing for finding the total no. of overweight persons", async () => {
      const response = await bmi.countOverweight(data);
      // console.log("Total no. of overweight persons: ", response);
      expect(response).to.be.a("number");
    });
  });
});
