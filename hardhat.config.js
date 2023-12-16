require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    // Keep the existing networks if you want, or remove them if you don't need them
    mumbai: {
      url: process.env.ALCHEMY_API_KEY_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
   // goerli: {
    //  url: "https://ethereum-goerli.publicnode.com",
     // accounts: [process.env.PRIVATE_KEY],
    //},
    // Add Sepolia network configuration
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL, // You'll need to set this in your .env file
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
