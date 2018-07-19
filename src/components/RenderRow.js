import React, {Component} from 'react'
import {Table, Button} from 'semantic-ui-react'
import EditForm from './EditForm'

import {Link, Router} from '../../routes'

class RenderRow extends Component {
  render(){
    const {Row, Cell} = Table
    const {id, address, block} = this.props

    return(
      <Row>
        <Cell>{id}</Cell>
        <Cell>{block.description}</Cell>
        <Cell>{block.encrypted}</Cell>
        <Cell>
          <Link route={`/passwordBlocks/${address}/${id}/edit`}>
            <a>
              <Button primary>Edit Block</Button>
            </a>
          </Link>
        </Cell>
      </Row>
    )
  }
}

export default RenderRow
