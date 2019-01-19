import React, {Component} from 'react'
import factory from '../ethereum/factory'
import web3 from '../ethereum/web3'
import { Button, Table, Header, Card, Container } from 'semantic-ui-react'
import Layout from '../components/Layout'

const CryptoJS = require("crypto-js")

class EditInput extends Component {

onGo = async (event) => {
    event.preventDefault()
    const accounts = await web3.eth.getAccounts()

    const name = document.getElementById("name").value
    const passwords = document.getElementById("passwords").value
    const seed = document.getElementById("seed").value
    const num = parseInt(this.props.tokenId)

    console.log(num);
    console.log(name+":"+passwords+":"+seed);

    this.encrypt(num, name, passwords, seed)
  }

  encrypt = async (num, name, pass, seed) => {
    //create strigified encrypted passwords
    let ciphertext = CryptoJS.AES.encrypt(pass, seed).toString()
    console.log(ciphertext);
    //
    try {
      const accounts = await web3.eth.getAccounts()

      await factory.methods.editToken(num, name +":"+ ciphertext).send({from: accounts[0]}).catch(console.log('didnt make it'))

    } catch (err) {
      this.setState({errorMessage: err.message})
    }
  }

render() {
  return (
    <Container>

      <form id="tokenForm">
        <div>
          <h4>Enter Token Name</h4>
          <input id="name" rows="4" form="tokenForm"></input>

          <h4>Enter Passwords</h4>
          <textarea id="passwords" rows="4" form="tokenForm"></textarea>

          <h4>Enter Seed Phrase</h4>
          <textarea id="seed" rows="4" form="tokenForm"></textarea>
        </div>
        <div>
          <button onClick={this.onGo}>
            Encrypt Passwords
          </button>
        </div>
      </form>

    </Container>
    )
  }
}

export default EditInput
