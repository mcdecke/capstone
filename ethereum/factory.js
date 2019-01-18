import web3 from './web3'

import PasswordToken from './build/PasswordToken'

const instance = new web3.eth.Contract(
  JSON.parse(PasswordToken.interface),
  '0xde11Afe14f2Da2cb1e3909b20dfef8599A126d38'
)

export default instance
