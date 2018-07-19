import web3 from './web3'

import PasswordFactory from './build/PasswordFactory.json'

//define the deployed instance of our contract factory
const instance = new web3.eth.Contract(
  JSON.parse(PasswordFactory.interface),
  // '0xC18D26e7a92a54eB097E8d738155Cd8624DBE551'
  // '0x655AF486686F42B1A8025e2A7Bfc1C1fe1D51047'
  // '0xcB88b2a12F63ab0dA464212A3dc76db888b1A889'
  '0xE79d6aD719F8b931e4563e69e6a2De4475b97e16'
)

export default instance;
