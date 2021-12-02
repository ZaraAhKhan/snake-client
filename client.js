const net = require("net");
const { IP, PORT} = require('./constants');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.on("connect",() => {
    console.log("Successfully connected to game server");
    conn.write("Name: ZAK");
    conn.write("Say: Hello");

  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data",(data) => {
    console.log(data);
  });

  
  process.stdin.on("data", (key) => {
    if (key === "z") {
      conn.write("Say: The end");
    }
  });

  return conn;
  
};

// const movements = ["Move: up","Move: left","Move: down","Move: right"];
//     for (let i = 0; i < movements.length; i++) {
//       setInterval(() => {
//         conn.write(movements[i]);
//       }, i * 1000);
module.exports = {connect};