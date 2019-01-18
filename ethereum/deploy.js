const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider')

const compiledFactory = require('./build/PasswordToken.json')

const provider = new HDWalletProvider(
  'alarm inject negative life spawn casino notable cactus alarm local brief hand', 'https://rinkeby.infura.io/uihm9RCLPyR2bFeoMPWT'
);
const web3 = new Web3(provider);
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
            .deploy({ data: '0x' + compiledFactory.bytecode, arguments: ['hola', 'mundo'] })
            .send({ from: accounts[0], gas: '4000000' })
            .catch(err => console.log('Contract NOT deployed ', err));

  // el despliegue del contrato en la red rinkeby.
  console.log('Contract deployed to', result.options.address);
};

deploy();
