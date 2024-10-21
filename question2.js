const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  /*
  Create a function that simulates a student midterm exam grading system. The function will take in a student's name and their exam score.
  
  - If the student's score is 86 or above, display "Excellent! [Student Name] has an A."
  - If the score is between 72 and 85, display "Great job! [Student Name] has a B."
  - If the score is between 60 and 72, display "Good effort! [Student Name] has a C."
  - If the score is between 50 and 60, display "Needs improvement. [Student Name] has a D."
  - If the score is below 50, display "Fail. [Student Name] has a F."
  
  CHALLENGE (SAVE FOR LAST):
  - If the student's score is within 2 points of the next grade bracket, display "Almost there! [Student Name] is close to a [next grade]."
    -For example, 48 would give you "Almost there! [Student Name] is close to a D."
  - If the student's score is within 2 points of the previous grade bracket, display "Work Hard! [Student Name] is almost falling to [previous grade]."
    -For example, 52 would give you "Work Hard! [Student Name] is almost falling to F."
    
    PLANNING:
    function will show 1 of 5 possible outputs depending on user input, 5 different comparisons
    output 1: "Excellent! [Student Name] has an A." if score >= 86
    output 2: "Great job! [Student Name] has a B." if score >= 72 && score <= 85
    output 3: "Good effort! [Student Name] has a C." if score >=60 && score < 72
    output 4: "Needs improvement. [Student Name] has a D." if score >= 50 && score < 60
    output 5: "Fail. [Student Name] has a F." if score < 50

    additionally...

    2 additional possible outputs
    output 6: "Almost there! [Student Name] is close to a [next grade]." using switch, create nextGrade variable and check if score is less than 2 from next letter grade
    output 7: "Work Hard! [Student Name] is almost falling to [previous grade]." using switch, create previousGrade variable and check if score is only greater than 2 from previous letter grade
    */
  
  //determine a proper function name and parameter variable name
  function gradingSystem(studentName, studentScore){

    if (studentScore  >= 86) {
        console.log("Excellent! " +studentName+ "has an A");
    } else if (studentScore >= 72 && studentScore <= 85) {
        console.log("Great job! " +studentName+ "has a B.");
    } else if (studentScore >= 60 && studentScore < 72) {
        console.log("Good effort! "+studentName+ "has a C.");
    } else if (studentScore >= 50 && studentScore < 60) {
        console.log("Needs improvement. " +studentName+ "has a D.");
    } else if (studentScore < 50) {
        console.log("Fail. "+studentName+ "has a F.");
    }
  
  }
  
  function StartApp(){
    readline.question('What is the name of the student?', _studentName => {
      readline.question('What is the score of the student?', _studentScore => {
  
        //call your function here.
  
        // readline.close();
        if(_input2 !== "quit"){
          StartApp();
        } else {
          readline.close();
        }
      });
    });
  }
  
  StartApp();