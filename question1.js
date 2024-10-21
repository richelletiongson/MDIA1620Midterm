const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  /*
  Create a function that simulates a simple password checking system. The function will take in a password and a user's input as parameters. It will then compare the user's input to the password.
  
  - If the user's input matches the password exactly, display "Access Granted!"
  - If the user's input does not match, display "Access Denied!"
  - If the user's input is "forgot", display "Here is a hint"
  - If the user's input is "reset", display "Let's reset your account"
  
  CHALLENGE (SAVE FOR LATER)
  - if the password set is "forgot" or "reset", and the user's input matches the password exactly. Aside from Access Granted, also display, "This password you set should not be used because it glitches the system".
  - the password set needs to be 5 characters or more, if it is below 5 characters, display "Password is inadequate"
  */
  
  
  //determine a proper function name and parameter variable name
  function TheFunction(paramVariable1, paramVariable2){
  
    //write your code here
  }
  
  //CHALLENGE FUNCTION
  
  
  function StartApp(){
    readline.question('Write a proper question to set the password', _input1 => {
      readline.question('Write a proper question to get the user to type the password', _input2 => {
  
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