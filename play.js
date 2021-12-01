const {connect} = require('./client');
const readline = require("readline");
const { Socket } = require('dgram');

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
  
};


const handleUserInput = function() {
  // your code here
  process.stdin.on("data", (key) => {
    if (key === ("\x{3}") {
      connect.disconnect();
      process.exit();
    }
    
  });

  
};

setupInput();

