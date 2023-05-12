const hre = require("hardhat");

async function main() {
  const Upload = await hre.ethers.getContractFactory("Mint");
  const upload = await Upload.deploy();

  await upload.deployed();

  console.log("Contract deployed to:", upload.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});