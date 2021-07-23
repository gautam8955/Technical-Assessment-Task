let count = 0;

//For Calculating BMI
const calculateBMI = (data) => {
  let weight, height, BMI;

  data.forEach((el) => {
    //Calculating BMI
    height = el.HeightCm / 100;
    weight = el.WeightKg;
    BMI = weight / height;
    el.BMI = parseFloat(BMI.toFixed(1));
  });

  return data;
};

//For Finding Category and Health Risk.
const CategoryAndHealthRisk = (data) => {
  data.forEach((el) => {
    if (el.BMI <= 18.4) {
      el.BMICategory = "Underweight";
      el.HealthRisk = "Malnutrition Risk";
    } else if (el.BMI >= 18.5 && el.BMI <= 24.9) {
      el.BMICategory = "Normal Weight";
      el.HealthRisk = "Low Risk";
    } else if (el.BMI >= 25 && el.BMI <= 29.9) {
      count++;
      el.BMICategory = "Overweight";
      el.HealthRisk = "Enhanced Risk";
    } else if (el.BMI >= 30 && el.BMI <= 34.9) {
      el.BMICategory = "Moderately Obese";
      el.HealthRisk = "Medium Risk";
    } else if (el.BMI >= 35 && el.BMI <= 39.9) {
      el.BMICategory = "Severely Obese";
      el.HealthRisk = "High Risk";
    } else if (el.BMI >= 40) {
      el.BMICategory = "Very Severely Obese";
      el.HealthRisk = "Very High Risk";
    }
  });
  return data;
};

//For Counting Overweight person
const countOverweight = (data) => {
  data.forEach((el) => {
    if (el.BMICategory === "Overweight") {
      count++;
    }
  });
  return count;
};

module.exports = { calculateBMI, CategoryAndHealthRisk, countOverweight };
