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

  PLANNING:
  function will show 1 of 4 possible outputs depending on user input, 4 different conditions
  output 1 = "Access Granted!" if input === password
  output 2 = "Access Denied!" if input !== password
  output 3 = "Here is a hint" if input === "forgot"
  output 4 = "Let's reset your account" if input === "reset"

  additionally...

  2 additional possible outputs 
  output 5 = "Access Granted!" and "This password you set should not be used because it glitches the system" if input === password && password === "forgot" || password === "reset"
  output 6 = "Password is inadequate" if password.length < 5 
  */
  
  
  //determine a proper function name and parameter variable name
  function passwordChecking(password, userInput){

    if (userInput === password) {
        console.log("Access Granted!");
    } else if (userInput !== password) {
        console.log("Access Denied!");
    } else if (userInput === "forgot") {
        console.log("Here is a hint");
    } else if (userInput === "reset") {
        console.log("Let's reset your account");
    }

    if (password === "forgot" || password === "reset") {
        console.log("This password you set should not be used because it glitches the system");
    } 

  }
  
  //CHALLENGE FUNCTION
  
  
  function StartApp(){
    readline.question('What would you like the password to be?', _password => {
      readline.question('What is the password?', _userInput => {

        if (_password.length < 5) {
            console.log("Password is inadequate")
        }
        passwordChecking(_password, _userInput);
  
        // readline.close();
        if(_userInput !== "quit"){
          StartApp();
        } else {
          readline.close();
        }
      });
    });
  }
  
  StartApp();