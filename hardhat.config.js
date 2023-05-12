require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

const {ZEEVE_HTTP_URL, PRIVATE_KEY} = process.env;

module.exports = {
  solidity: "0.8.9",
  networks: {
    polygon_mumbai: {
      url: ZEEVE_HTTP_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
  paths: {
    artifacts: "./my-nft-dapp/artifacts",
  },
}