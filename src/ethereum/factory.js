import web3 from './web3'

import PasswordFactory from './build/PasswordFactory.json'

//define the deployed instance of our contract factory
const instance = new web3.eth.Contract(
  JSON.parse(PasswordFactory.interface),
  '0xC18D26e7a92a54eB097E8d738155Cd8624DBE551'
)

export default instance;
