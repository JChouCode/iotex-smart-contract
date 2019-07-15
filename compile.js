import solc from "solc";

var fs = require("fs");

const solidityFileString = fs.readFile("deploy.js", "utf8", function (err, data) {
  if (err) throw err;
  return data;
})
const contractName = ":SimpleStorage";
const output = solc.compile(solidityFileString, 1);
const abi = JSON.parse(output.contracts[contractName].interface);
const bytecode = output.contracts[contractName].bytecode;
console.log(abi);
console.log(bytecode);