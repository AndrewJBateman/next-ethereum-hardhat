require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	defaultNetwork: "rinkeby",
	networks: {
		hardhat: {},
		rinkeby: {
			url:
				"https://eth-mainnet.alchemyapi.io/v2/" +
				process.env.ALCHEMY_RINKEBY_KEY,
			accounts: process.env.WALLET_PRIVATE_KEY,
		},
	},
	solidity: {
		version: "0.5.15",
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
	paths: {
		sources: "./contracts",
		tests: "./test",
		cache: "./cache",
		artifacts: "./artifacts",
	},
	mocha: {
		timeout: 20000,
	},
};
