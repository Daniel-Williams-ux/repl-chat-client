//Add the Socket client and readline modules
const io = require("socket.io-client");
const readline = require("readline");

//Create a new connection to the chat server
var socket = io("https://repl-chat-server.DanielWilliams23.repl.co");

//Setup a console interface
const chat_interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});