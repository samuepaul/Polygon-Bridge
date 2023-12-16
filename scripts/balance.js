const { ethers } = require("hardhat");

async function main() {
  const signers = await ethers.getSigners();
  const signer = signers[0]; // Use the first signer by default

  // Get ERC721 contract instance on Polygon Mumbai
  const DogNFT = await ethers.getContractFactory("DogNFT");
  const dognft = await DOGNFT.attach("0xDCc198654456d2575A8A1987d1104922678Bfc58");

  // Address to check balance for
  const addressToCheck = "0x3D054C3CB85c9044421a4b5FC9c2A10478b26Ed7";

  // Test balanceOf on Polygon Mumbai
  const balance = await dognft.balanceOf(addressToCheck);
  console.log("\nBalance of", addressToCheck, "on Polygon Mumbai:", balance.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
