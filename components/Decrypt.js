import React, {Component} from 'react'
import factory from '../ethereum/factory'
import web3 from '../ethereum/web3'
import { Button, Table, Header, Card, Container } from 'semantic-ui-react'
import Layout from '../components/Layout'

const CryptoJS = require("crypto-js")

class EditInput extends Component {



onGo = async (event) => {
    event.preventDefault()
    this.setState({decrypted: 'asdf'})
    const accounts = await web3.eth.getAccounts()

    // const name = document.getElementById("name").value
    // const passwords = document.getElementById("passwords").value
    const deseed = document.getElementById("deseed").value
    const num = parseInt(this.props.tokenId)


    console.log(num);
    console.log(deseed);

    this.decrypt(deseed)
  }


  decrypt = async (deseed) => {

  let ciphertext = this.props.data[0].split(':')[1]
  console.log(ciphertext);

  let bytes = CryptoJS.AES.decrypt(ciphertext, deseed);
  console.log(bytes);
  let decryptedData = bytes.toString(CryptoJS.enc.Utf8)
  console.log(decryptedData)
}

render() {
  return (
    <Container>

      <form id="tokenForm">
        <div>
          <h4>Enter Seed Phrase</h4>

          <textarea id="deseed" rows="4" form="tokenForm"></textarea>
        </div>
        <div>
          <button onClick={this.onGo}>
            Decrypt Data
          </button>
        </div>
      </form>

    </Container>
    )
  }
}

export default EditInput
