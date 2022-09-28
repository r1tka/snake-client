const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.on("connect", () => {
    console.log("Connected")
    conn.write("Name: ML")
    
  })
  conn.on("data", (data) => {
    console.log("Data:", data)
  })
  // interpret incoming data as text
  conn.setEncoding("utf8");
  

  return conn;
};

module.exports = {connect}