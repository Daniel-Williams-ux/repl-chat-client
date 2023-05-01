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

//User and message variables
var chat_handle = "";
var message_to_send = "";

//Handle Socket events
socket.on("connect", function () {
  get_chat_handle();
  socket.on("broadcast", display_message);
});//this code calls two methods: get_chat_handle and display_message