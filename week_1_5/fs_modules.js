const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "a.txt");
// filesystem module
fs.readFile(filePath, "utf-8", function(err, data){
    if(err){
        console.log("Error reading file:", err);
    }   
    else{
        console.log("File contents:", data);
    }
});  