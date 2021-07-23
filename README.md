# code-20210723-Gautam_Saini

#About the App
--> I have developed an API through which we can get BMI data of anyone.
--> We just need the Height and weight of the person to calculate the BMI.
--> It also shows BMI Category and Health risk according BMI score.
--> It also shows the no. of person are fell under the overweight category.

# How it works
--> First we have to fire the request on http://localhost:3000/bmi with json body from postman.
--> Than it will first calculate the BMI of all records and add them to same record. 
--> Than it will find the BMI Category and Health Risk and add them to same record.
--> AT last it will count the No. of Persons fall in the overweight category.

# Tools and Technologies used
--> Node.js
--> Express.js
--> JavaScript
--> Mocha and chai for writing test cases.
--> Postman for firing request.
--> VS code Editor.

# How to use
--> First, Clone the repository from master branch.
--> In terminal, Navigate to the folder and run npm install. This will install node modules according to package.json file.
--> Than in terminal, run npm start to start the server on port 3000.

![image](https://user-images.githubusercontent.com/48324949/126805569-813c48a1-5d09-40ae-ac52-ffb4763f2fe1.png)

--> Open postman to fire the request with json data.

![image](https://user-images.githubusercontent.com/48324949/126805890-170c429a-22ac-4bcf-bce9-3c64c76e076d.png)

--> After clicking on the send button. you will get your response data.

![image](https://user-images.githubusercontent.com/48324949/126806089-8f71c52e-1314-4156-98b5-769a1820e4a9.png)

