// this will serve my main file through which I will launch th game client
const net = require("net");
const connected = require(`./client`)
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server")
    conn.write("Name: ML");  
  })

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};
const handleUserInput = function (data) {
  console.log("DATA", data)
  if (data === '\u0003') {
    process.exit();
    // conn.write("Move: up"); 

  }

  // your code here
};
  // conn.on("connect", () => {
  // })


  conn.on("data", (data) => {
    console.log("Data:", data)
  })
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  setupInput();
  return conn;
};

console.log("Connecting ...");
connect();
