import React, {Component} from 'react'
// import '../index.css';
// import '../App.css';
// import App from '../src/App'

class Decrypt extends Component {

render() {
  return (
    <div>
      Hello World!
      <input id="decrypt" type="text" name="Decryptor" defaultValue="Enter encrypted block"></input>
      <br></br>
      <input id="superSecretInput" type="text" name="Decryptor" defaultValue="Enter Seed"></input>
      <br></br>
      <button onClick={this.props.decrypt}>Decrypt Passwords </button>
      </div>
    )
  }
}

export default Decrypt
