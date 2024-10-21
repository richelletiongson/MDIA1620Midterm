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

  PLANNING:
  function will show 1 of 2 outputs depending on user input, 2 different conditions/comparisons (enough or not enough)
  output 1: "[student name] purchased [lunch item] purchased!" if current lunch money >= cost of lunch 
  output 2: "[student name] does not have sufficient funds to buy [lunch item]!" if current lunch money < cost of lunch

  additionally...

  4 additional possible outputs
  (declare balance variable)
  output 3: "[student name] purchased [lunch item] purchased! Remaining Balance [balance]" balance = lunch money - cost of lunch
  output 4: "[student name] does not have sufficient funds to buy [lunch item]! Needs [amount] more." balance = cost of lunch - lunch money
  output 5: "Warning: Low balance!" if balance < 5
  output 6: "Balance depleted! Please add more funds." if balance === 0
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