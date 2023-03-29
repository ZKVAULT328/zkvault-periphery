import { ethers } from "hardhat";

const _factory: string = "0x7c455e7a5147dA4cf7DD58B38FBC257CA03f4A45";
const _WETH: string = "0xEEbdC6192cB8CD9E27D880Fa0dcEC11a2B407B0C";

async function main() {
  const Router = await ethers.getContractFactory("ZKVaultRouter02");
  const router = await Router.deploy(_factory, _WETH);

  let [account] = await ethers.getSigners();
  let deployerAddress = account.address;
  console.log(`Deploying router using ${deployerAddress}`);

  await router.deployed();

  console.log(`Router deployed to ${router.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
