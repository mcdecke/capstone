import React, {Component} from 'react'
import {Table, Button, Input, Form} from 'semantic-ui-react'
import EditForm from './EditForm'
const CryptoJS = require("crypto-js")
import {Link, Router} from '../../routes'

class RenderRow extends Component {

  state = {
    seed: '',
    decryptedPasswords: ''
  }

  decrypt = async (e) => {
    e.preventDefault()
    const superSecretKey = this.state.seed

    let ciphertext = this.props.block.encrypted
    console.log(ciphertext);
    console.log(superSecretKey);
    let bytes = CryptoJS.AES.decrypt(ciphertext, superSecretKey);
    console.log(bytes);
    let decryptedData = bytes.toString(CryptoJS.enc.Utf8)
    console.log(decryptedData);
    this.setState({decryptedPasswords: decryptedData})
  }






  render(){
    const {Row, Cell} = Table
    const {id, address, block} = this.props

    let styles = {
      // margin: '20px',
      float: 'right',
      // border: '30px'
  }

    return(
      <Row>
        <Cell>{id}</Cell>
        <Cell>{block.description}</Cell>
        <Cell>{block.encrypted}</Cell>

        <Cell>
          <Form onSubmit={this.decrypt} error={!!this.state.errorMessage}>
            <Input label="Enter Seed" labelPosition="right" value={this.state.seed} onChange={event => this.setState({seed: event.target.value})}/>

            {/* <Link
              route={`/passwordBlocks/${address}/${id}/edit`}> */}
              <a>
                <Button primary style={styles}> Edit Block</Button>
              </a>
            {/* </Link> */}
          </Form>
        </Cell>
        {this.state.decryptedPasswords}
      </Row>
    )
  }
}

export default RenderRow
