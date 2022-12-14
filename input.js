let connection;
const setupInput = (conn) => {
  connection = conn;
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
    process.exit(); // ctrl + c
  }
  if (data === 'w') {
    connection.write("Move: up")
  }
  if (data === 'a') {
    connection.write("Move: left")
  }
  if (data === 's') {
    connection.write("Move: down")
  }
  if (data === 'd') {
    connection.write("Move: right")
  }
  if (data === 'q') {
    connection.write("Say: hi there");
  // your code here
};
}
module.exports = { setupInput }