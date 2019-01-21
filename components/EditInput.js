import React, {Component} from 'react'
import factory from '../ethereum/factory'
import web3 from '../ethereum/web3'
import { Button, Table, Header, Card, Container } from 'semantic-ui-react'
import Layout from '../components/Layout'

const CryptoJS = require("crypto-js")

class EditInput extends Component {

  constructor() {
  super();
  this.state = {
    name: "",
    passwords: [{ name: "" }]
    };
  }

handleNameChange = evt => {
   this.setState({ name: evt.target.value });
 };

 handlePasswordNameChange = idx => evt => {
   const newPasswords = this.state.passwords.map((password, sidx) => {
     if (idx !== sidx) return password;
     return { ...password, name: evt.target.value };
   });

   this.setState({ passwords: newPasswords });
 };

 handleSubmit = evt => {
   const { name, passwords } = this.state;
   alert(`Incorporated: ${name} with ${passwords.length} passwords`);
 };

 handleAddPassword = () => {
   this.setState({
     passwords: this.state.passwords.concat([{ name: "" }])
   });
 };

 handleRemovePassword = idx => () => {
   this.setState({
     passwords: this.state.passwords.filter((s, sidx) => idx !== sidx)
   });
 };

  componentWillMount() {
    this.setState({counter: 0})
  }

  onGo = async (event) => {
    event.preventDefault()
    const accounts = await web3.eth.getAccounts()
    const name = document.getElementById("name").value
    const passwords = this.state.passwords
    const seed = document.getElementById("seed").value
    const num = parseInt(this.props.tokenId)
    console.log(num, name, passwords, seed);
    this.encrypt(num, name, passwords, seed)
  }

  onAddPassword(){
    event.preventDefault()
    console.log('hi');
    this.setState({counter: counter + 2})
  }

  encrypt = async (num, name, pass, seed) => {
    //create strigified encrypted passwords
    let passString = JSON.stringify(pass)
    let ciphertext = CryptoJS.AES.encrypt(passString, seed).toString()
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

     <form
      id="tokenForm"
      onSubmit={this.handleSubmit}>
     <div>
       <h4>Enter Token Name</h4>
       <input id="name" rows="4" form="tokenForm"></input>

       <h4>Enter Seed Phrase</h4>
       <textarea id="seed" rows="4" form="tokenForm"></textarea>
     </div>

       <h4>Passwords</h4>

       {this.state.passwords.map((password, idx) => (
         <div className="password">
           <input
             type="text"
             placeholder={`Password #${idx + 1} name`}
             value={password.name}
             onChange={this.handlePasswordNameChange(idx)}
           />
           <button
             type="button"
             onClick={this.handleRemovePassword(idx)}
             className="small"
           >
             -
           </button>
         </div>
       ))}
       <button
         type="button"
         onClick={this.handleAddPassword}
         className="small"
       >
         Add Password
       </button>
     </form>
     <hr/>
     <button onClick={this.onGo}>
       Encrypt Passwords
     </button>
    </Container>
    )
  }
}

export default EditInput
