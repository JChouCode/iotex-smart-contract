var fs = require("fs");

// Read solidity contract
const contractFile = fs.readFileSync("./build/contracts/BasicToken.json", "utf8", function (err, data) {
  if (err) throw err;
  return data;
})

const contractJSON = JSON.parse(contractFile);
const abi = contractJSON['abi']
const bytecode = contractJSON['bytecode']
// const contractName = ":BasicToken";
// const output = solc.compile(solidityFileString, 1);
// const abi = JSON.parse(output.contracts[contractName].interface);
// const bytecode = output.contracts[contractName].bytecode;
console.log(abi);
console.log(bytecode);