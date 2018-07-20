import React, { Component } from 'react'
import { Form, Button, Message, Input } from 'semantic-ui-react'
import PasswordBlock from '../../../src/ethereum/passwordBlock'
import web3 from '../../../src/ethereum/web3'
import {Link, Router} from '../../../routes'
import Layout from '../../../src/components/Layout'
const CryptoJS = require("crypto-js")

class EditPassword extends Component {
  state = {
    description: '',
    password: '',
    loading: false,
    errorMessage: '',
    seed: '',
    encryptedPasswords: '',
    passwordList: ''
  }

  static async getInitialProps(props){
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

  encrypt = async () => {
    // get elements from form
    const superSecretKey = this.state.seed

    // create data from elements
    const data = JSON.stringify(this.state.password)
    // const data2 = this.state.passwordList.toString()
    // console.log(data+`+`+data2);
    // create strigified encrypted passwords
    let ciphertext = CryptoJS.AES.encrypt(data, superSecretKey).toString();
    console.log(ciphertext);
    this.setState({encryptedPasswords: ciphertext})
  }

  onSubmit = async (event) => {
    event.preventDefault()
    this.setState({loading: true})
    const passwordBlock = PasswordBlock(this.props.address)
    const { description, password, encryptedPasswords } = this.state
    console.log(description, password);
    //need some encryption here, and to pull in the other pwds.

    this.encrypt()

    try {
      const accounts = await web3.eth.getAccounts()
      console.log(this.state.encryptedPasswords);
      await passwordBlock.methods.newPasswordBlock(
        description, this.state.encryptedPasswords
      ).send({from: accounts[0]})
      Router.pushRoute(`/passwordBlocks/${this.props.address}/`)
    } catch (err) {
      this.setState({errorMessage: err.message})
    }

    this.setState({loading: false})
  }

  render(){
    return (
      <Layout>
        <Link route={`/passwordBlocks/${this.props.address}/edit`}>
          <a>
            Back
          </a>
        </Link>
        <h3>Add a New Password</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Description</label>
            <Input
              value={this.state.description}
              onChange={event => this.setState({description: event.target.value})}
            />
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <Input
              value={this.state.password}
              onChange={event => this.setState({password: event.target.value})}
            />
          </Form.Field>

          <Form.Field>
            <label>Seed</label>
            <Input
              value={this.state.seed}
              onChange={event => this.setState({seed: event.target.value})}
            />
          </Form.Field>

          <Message error header="Uh Oh!" content={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>Create!</Button>
        </Form>
      </Layout>
    )
  }
}

export default EditPassword
