const hre = require("hardhat");

async function main() {
  const Library = await hre.ethers.getContractFactory("Library");
  const library = await Library.deploy();

  await library.deployed();

  console.log("Library contract deployed to:", library.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });