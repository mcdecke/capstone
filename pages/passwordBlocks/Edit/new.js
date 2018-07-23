import React, {Component} from 'react'
import {Form, Button, Input, Message} from 'semantic-ui-react'
import Layout from '../../../src/components/Layout'
import factory from '../../../src/ethereum/factory'
import web3 from '../../../src/ethereum/web3'
import {Link, Router} from '../../../routes'
import PasswordBlock from '../../../src/ethereum/passwordBlock'
const CryptoJS = require("crypto-js")

class EditPassword extends Component {
  state = {
    description: '',
    loading: false,
    errorMessage: '',
    seed: '',
    encryptedPasswords: '',
    passwordList: [],
    passwordCount: 1,
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

    return { address, thisBlock, id, passwordBlock}
  }

  onAddPassword = (e) => {
    e.preventDefault()

    this.setState({
      passwordCount: this.state.passwordCount + 1
    })

    for (var i = 0; i < this.state.passwordCount - 1; i++) {
      console.log(this.state.passwordCount);
      this.state.passwordList[i + 1] = (
      <div>
      <Form.Field>
        <label>Add a Description</label>
        <Input id={`Desc${i+1}`} label="Description" labelPosition="right"/>
      </Form.Field>

      <Form.Field>
        <label>Add Password</label>
        <Input id={`Pass${i+1}`} label="Password" labelPosition="right"/>
      </Form.Field>
    </div>
    )
    }
  }

  onSubmit = async (event) => {
    event.preventDefault()
    let descriptions = []
    let passwords = []
    let toBeEncrypted = []

    for (var i = 0; i < this.state.passwordCount - 1; i++) {
      descriptions[i] = document.getElementById(`Desc${i}`).value
      passwords[i] = document.getElementById(`Pass${i}`).value
      toBeEncrypted[i] = [`${descriptions[i]}: ${passwords[i]}`]
    }
    this.encrypt(toBeEncrypted)
  }



  encrypt = async (arr) => {
    // get elements from form
    const superSecretKey = this.state.seed
    // create data from elements
    const passwordBlock = PasswordBlock(this.props.address)
    const { encryptedPasswords } = this.state
    const data = JSON.stringify(arr)

    let ciphertext = CryptoJS.AES.encrypt(data, superSecretKey).toString();

    let description = document.getElementById('Label').value
    console.log(description);
    this.setState({encryptedPasswords: ciphertext, loading: true, errorMessage: ''})

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

  // onSubmit = async (event) => {
  //   event.preventDefault()
  //   this.setState({loading: true})
  //   const passwordBlock = PasswordBlock(this.props.address)
  //   const { description, password, encryptedPasswords } = this.state
  //   console.log(description, password);
  //   //need some encryption here, and to pull in the other pwds.
  //
  //   this.encrypt()
  //
  //   try {
  //     const accounts = await web3.eth.getAccounts()
  //     console.log(this.state.encryptedPasswords);
  //     await passwordBlock.methods.newPasswordBlock(
  //       description, this.state.encryptedPasswords
  //     ).send({from: accounts[0]})
  //     Router.pushRoute(`/passwordBlocks/${this.props.address}/`)
  //   } catch (err) {
  //     this.setState({errorMessage: err.message})
  //   }
  //
  //   this.setState({loading: false})
  // }

  render(){
    return (
      <Layout>
        <h3>Create a New Password Block</h3>
           <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}
            className='FORM'
              >

            <div>
              <Form.Field>
                <label>Password Block Name</label>
                <Input id='Label' label="Block Name" labelPosition="right"/>
              </Form.Field>

              <Form.Field>
                <label>Add a Description</label>
                <Input id='Desc0' label="Description" labelPosition="right"/>
              </Form.Field>

              <Form.Field>
                <label>Add Password</label>
                <Input id='Pass0' label="Password" labelPosition="right"/>
              </Form.Field>
            </div>

              <div >
                {this.state.passwordList}
              </div>

              <br></br>
              <Button primary="primary" onClick={((e) => this.onAddPassword(e))}>Add Another Password!</Button>

              <Message error="error" header="Oops!" content={this.state.errorMessage}/>
              <br></br>
              <br></br>
              <Form.Field>
                <label>Seed</label>
                <Input
                  value={this.state.seed}
                  onChange={event => {
                    this.setState({seed: event.target.value})
                  }
                }
                />
              </Form.Field>
              <br></br>
              <br></br>
              <Button loading={this.state.loading} primary="primary">Encrypt Passwords!</Button>
            </Form>
          </Layout>
        )
  }
}

export default EditPassword
