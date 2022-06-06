var fs = require("fs");

var UniswapV2Factory = artifacts.require("UniswapV2Factory");
var UniswapV2Factory = artifacts.require("UniswapV2Factory");

const factory = "0x8fd2cEd4f6751FBB29186196c255C667f6636A25"; // From core
const feeToSetter = "0x24d39F8c3c38Df135Fd28078e6A2e2dCF9284FBB";
const WETH = "0x6a5786Cdd77BcD95F35978A160c5dA349CF2C0BA";
const tokenA = "0x6a5786Cdd77BcD95F35978A160c5dA349CF2C0BA";
const tokenBN = "0x6a5786Cdd77BcD95F35978A160c5dA349CF2C0BA";

const DEPLOY_NEW = true;

function wf(name, address) {
  fs.appendFileSync('.env', name + "=" + address);
  fs.appendFileSync('.env', "\r\n");
}


module.exports = async function (deployer) {
  //require('dotenv').config();
 
  if (DEPLOY_NEW) {
    await deployer.deploy(UniswapV2Factory, feeToSetter);
    var iUniswapV2Factory = await UniswapV2Factory.deployed();
    wf("iUniswapV2Factory", iUniswapV2Factory.address);
  } else {
      //var iUniswapV2Factory = await UniswapV2Factory.at(process.env.iUniswapV2Factory);
  }
};
