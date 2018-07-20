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
            <Link
              route={`/passwordBlocks/${address}/${id}/edit`}>
              <a>
                <Button primary style={styles}>Edit Block</Button>
              </a>
            </Link>
        </Cell>
        {this.state.decryptedPasswords}
      </Row>
    )
  }
}

export default RenderRow
