import React, {Component} from 'react'
import {Button, Input, Form, Message} from 'semantic-ui-react'
import {Link} from '../../../routes'
import Layout from '../../../src/components/Layout'
import PasswordBlock from '../../../src/ethereum/passwordBlock'
import factory from '../../../src/ethereum/factory'
import web3 from '../../../src/ethereum/web3'
import Password from '../../../src/components/Password'
const CryptoJS = require("crypto-js")

class EditBlock extends Component {

  state = {
    description: '',
    errorMessage: '',
    loading: false,
    password: '',
    seed: '',
    decryptedPasswords: ''
  }

static async getInitialProps(props){
  const {address} = props.query
  const passwordBlock = PasswordBlock(address)
  // console.log(passwordBlock);
  const blockCount = await passwordBlock.methods.getBlockCount().call()
  // console.log(blockCount+"!!!");
  const blocks = await Promise.all(
    Array(parseInt(blockCount)).fill().map((element, index) => {
      return passwordBlock.methods.encryptedBlock(index).call()
    })
  )
  const thisBlock = blocks[props.query.id]
  const id = props.query.id
  // console.log(id);
  // console.log(thisBlock);
  // console.log(passwordBlock.methods);

  return { address, thisBlock, id, passwordBlock}
}

decrypt = async (e) => {
  e.preventDefault()
  const superSecretKey = this.state.seed

  let ciphertext = this.props.thisBlock.encrypted
  console.log(ciphertext);
  console.log(superSecretKey);
  let bytes = CryptoJS.AES.decrypt(ciphertext, superSecretKey);
  console.log(bytes);
  let decryptedData = bytes.toString(CryptoJS.enc.Utf8)
  console.log(decryptedData);
  this.setState({decryptedPasswords: decryptedData})
}



onSubmit = async (event) => {
  // console.log(this.props.thisBlock[]);
  console.log(this.props.passwordBlock.methods.editDeployedBlock);
  event.preventDefault()
  console.log('ere');
  this.setState({loading: true, errorMessage: ''})

console.log('about to try');

  try {
    const accounts = await web3.eth.getAccounts()
    console.log(accounts[0]);
    await this.props.passwordBlock.methods.editDeployedBlock(this.props.id, this.state.description, this.props.thisBlock.encrypted).send({from: accounts[0]})
    // Router.pushRoute(`/passwordBlocks/${address}/${this.props.id}`)
    Router.pushRoute(`/`)
  } catch (err) {
    this.setState({errorMessage: err.message})
  }
  this.setState({loading: false})
}

  render() {
    return (
      <Layout>
        <h3>Edit Password Block</h3>
        <img
          src={`https://eth.vanity.show/${this.props.address}`}
          alt={`Identicon of ether address ${this.props.address}`}
        />
        <br></br>

        <Form onSubmit={this.decrypt} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Change Description</label>
            <Input placeholder={this.props.thisBlock.description} label="Description" labelPosition="right"  onChange={event => this.setState({description: event.target.value})}/>
          </Form.Field>

          <Form.Field>
            <label>Encrypted Passwords</label>
            <Input disabled placeholder={this.props.thisBlock.encrypted} label="Password" labelPosition="right" onChange={event => this.setState({password: event.target.value})}/>
          </Form.Field>

          <Form.Field>
            <label>Seed</label>
            <Input placeholder={this.props.seed} label="Seed" labelPosition="right" onChange={event => this.setState({seed: event.target.value})}/>
          </Form.Field>


          <Message error="error" header="Oops!" content={this.state.errorMessage}/>
          <Button loading={this.state.loading} primary="primary">Edit Block!</Button>
        </Form>

        <Password
          description='description goes here'
          password={this.state.decryptedPasswords}
        />

      </Layout>
    )
  }
}

export default EditBlock
