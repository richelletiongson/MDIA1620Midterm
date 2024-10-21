const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  /*
  Create a function that simulates a lunch money management system for students. The function will take in a student's name, the amount of lunch money they currently have, the lunch item name, and the cost of their lunch.
  
  - If the student has enough money to buy lunch, display "[student name] purchased [lunch item] purchased!"
  - If the student does not have enough money, display "[student name] does not have sufficient funds to buy [lunch item]!"
  
  CHALLENGE (SAVE FOR LAST):
  - Show the remaining balance if the student has enough money to buy lunch
    - "[student name] purchased [lunch item] purchased! Remaining Balance [balance]"
  
  - Show the amount of money still needed balance if the student does not have enough money
    - "[student name] does not have sufficient funds to buy [lunch item]! Needs [amount] more."
    
  - If the student's remaining balance is less than $5, display "Warning: Low balance!"
  - If the student's remaining balance is exactly $0, display "Balance depleted! Please add more funds."
  
  */
  
  //determine a proper function name and parameter variable name
  function TheFunction(paramVariable1, paramVariable2,paramVariable3, paramVariable4){
  
    //write your code here
  }
  
  function StartApp(){
    readline.question('Write a proper question to get the student name', _input1 => {
      readline.question('Write a proper question to get the amount of lunch money', _input2 => {
        readline.question('Write a proper question to get lunch item name', _input3 => {
          readline.question('Write a proper question to get lunch item costs', _input4 => {
  
            //call your function here.
  
            // readline.close();
            if(_input4 !== "quit"){
              StartApp();
            } else {
              readline.close();
            }
          })
        })
      });
    });
  }
  
  StartApp();