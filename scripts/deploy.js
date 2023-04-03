
const hre = require("hardhat");

async function main() {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const unlockTime = currentTimestampInSeconds + 60;

  const lockedAmount = hre.ethers.utils.parseEther("0.001");

  const NFTMarketPlace = await hre.ethers.getContractFactory("NFTMarketPlace");
  const nftMarketPlace = await NFTMarketPlace.deploy();

  await nftMarketPlace.deployed();

  console.log(
    `Lock with ${ethers.utils.formatEther(
      lockedAmount
    )}deployed contract Address ${nftMarketPlace.address}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
