import web3 from './web3'

import PasswordToken from './build/PasswordToken'

const instance = new web3.eth.Contract(
  JSON.parse(PasswordToken.interface),
  '0xDa6F20b595735690a5411413242fC3A0B3959540'
)

export default instance
