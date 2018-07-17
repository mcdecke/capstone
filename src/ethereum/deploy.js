const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3');
const { interface, bytecode } = require('./compile')

const provider = new HDWalletProvider(
  'alarm inject negative life spawn casino notable cactus alarm local brief hand', 'https://rinkeby.infura.io/uihm9RCLPyR2bFeoMPWT'
);

const web3 = new Web3(provider);

const deploy = async () => {

  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data: '0x' + bytecode, arguments: ['Hi there!']})
  .send({gas: '1000000', gasPrice: web3.utils.toWei('2', 'gwei'), from: accounts[0]})
  .catch();

  console.log('contract deployed to', result.options.address);
};

deploy();
