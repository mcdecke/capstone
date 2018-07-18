import web3 from './web3'

import PasswordFactory from './build/PasswordFactory.json'

//define the deployed instance of our contract factory
const instance = new web3.eth.Contract(
  JSON.parse(PasswordFactory.interface),
  '0xff3F7Ef81a57f108Bed35640Dd0a86446bfa2565'
)

export default instance;
