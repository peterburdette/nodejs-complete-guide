console.log("Running first-app.js...");

// fs = file system
const fs = require("fs");

// writeFileSync() is a method that is made available by the 'file system (fs)' object - this method will write a file to the hard drive.
// first argument is the path to the file including the name of the file and the second argument is the content of the file.
fs.writeFileSync("files/hello.txt", "Hello from Node.js!");
