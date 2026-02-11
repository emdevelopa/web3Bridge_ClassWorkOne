require("@nomicfoundation/hardhat-toolbox");
import "dotenv/config";


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
   networks: {
    celoTestnet: {
      url: process.env.CELO_TESTNET_RPC_URL,
      chainId: 11142220, 
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
     
  },
    etherscan: {
    apiKey: {
      arcTestnet: "abc",
      liskSepolia: "abc",
      liskMainnet: "abc",
    },
    customChains: [
  {
    network: "celoSepolia",
    chainId: 11142220,
    urls: {
      apiURL: "https://celo-sepolia.blockscout.com/api",
      browserURL: "https://celo-sepolia.blockscout.com",
    },
  },
],

  },
  sourcify: {
    enabled: false,
  },
};
