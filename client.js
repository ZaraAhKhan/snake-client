const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });
  conn.on("connect",() => {
    console.log("Successfully connected to game server");
    conn.write("Name: ZAK");
    conn.write("Move: up");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data",(data) => {
    console.log(data);
  });

  return conn;
  
};

// const movements = ["Move: up","Move: left","Move: down","Move: right"];
//     for (let i = 0; i < movements.length; i++) {
//       setInterval(() => {
//         conn.write(movements[i]);
//       }, i * 1000);
module.exports = {connect};