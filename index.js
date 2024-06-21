#!/usr/bin/env node
const [,,] =process.argv;
var fs =require("fs");

fs.writeFileSync("./src/App.css","");
fs.writeFileSync("./src/index.css","");
const data = fs.readFileSync("./node_modules/clean-it/app.txt","utf-8");
fs.writeFileSync("./src/App.jsx",data);


console.log(`##### cleaned #####`);