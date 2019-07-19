import Antenna from "iotex-antenna";

(async () => {
  const antenna = new Antenna("http://api.testnet.iotex.one:80");

  const bytecode = "bytecode";

  const abi = "abi"
  const creator = antenna.iotx.accounts.privateKeyToAccount(
    "private key"
  );

  const actionHash = await antenna.iotx.deployContract({
    from: creator.address,
    amount: "0",
    abi: abi,
    data: Buffer.from(bytecode, "hex"),
    gasPrice: toRau("1", "Qev"),
    gasLimit: "100000"
  });
})()