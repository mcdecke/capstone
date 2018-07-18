import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'
import Layout from '../../src/components/Layout'
import PasswordBlock from '../../src/ethereum/passwordBlock'

class ShowPassBlock extends Component {

  static async getInitialProps(props) {
    const block = PasswordBlock(props.query.address)
    console.log(block.methods);
    const summary = await block.methods.encryptedBlock(0).call()

    console.log(summary);

    if(!summary) {
      return {
        description: 'Password Block',
        encrypted: 'gobbledegook'
      }
    }

    return {
      description: summary[0],
      encrypted: summary[1]
    }
  }

  renderBlocks() {
    const {
      description,
      encrypted
    } = this.props

    console.log(description+`!+!`+encrypted);

    const items = [{
      header: description,
      meta: encrypted,
      data: 'Encrypted Passwords'
    }]

    console.log(items);

    return <Card.Group items={items}/>
  }

  render() {
    return (
      <Layout>
        <h3>Show Block</h3>
        {this.renderBlocks()}
      </Layout>
    )
  }
}

export default ShowPassBlock
