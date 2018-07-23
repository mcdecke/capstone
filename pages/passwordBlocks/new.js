import React, {Component} from 'react'
import {Form, Button, Input, Message} from 'semantic-ui-react'
import Layout from '../../src/components/Layout'
import factory from '../../src/ethereum/factory'
import web3 from '../../src/ethereum/web3'
import {Link, Router} from '../../routes'
const CryptoJS = require("crypto-js")

class NewPassBlock extends Component {

  state = {
    description: '',
    errorMessage: '',
    loading: false,
    passwordCount: 1,
    passwordList: [],
    encryptedPasswords: '',
    seed: ''
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


  encrypt = async (arr) => {
    event.preventDefault()
    // get seed from form
    //create data from elements
    const data = JSON.stringify(arr)
    //create strigified encrypted passwords
    let ciphertext = CryptoJS.AES.encrypt(data, this.state.seed).toString();

    // this.setState({encryptedPasswords: ciphertext})
    this.setState({loading: true, errorMessage: ''})

    try {
      const accounts = await web3.eth.getAccounts()

      const addr = await factory.methods.createPasswordBlock(document.getElementById('Label').value, ciphertext).send({from: accounts[0]})
      console.log(addr);
      Router.pushRoute(`/passwordBlocks/`)
    } catch (err) {
      this.setState({errorMessage: err.message})
    }
    this.setState({loading: false})

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

  render() {

    return (<Layout>
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
    </Layout>)
  }
}

export default NewPassBlock
