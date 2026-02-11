// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://v2.hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const Greeter = buildModule("Greeter", (m) => {
 

  const greeter = m.contract("Greeter");

  return { greeter };
});

export default Greeter;
