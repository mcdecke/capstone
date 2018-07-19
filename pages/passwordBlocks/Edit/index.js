import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'
import {Link} from '../../../routes'
import Layout from '../../../src/components/Layout'
import PasswordBlock from '../../../src/ethereum/passwordBlock'

class EditBlock extends Component {

static async getInitialProps(props){
  const {address} = props.query
  const passwordBlock = PasswordBlock(address)

  const blockCount = await passwordBlock.methods.getBlockCount().call()
  console.log(blockCount+"!!!");

  const blocks = await Promise.all(
    Array(parseInt(blockCount)).fill().map((element, index) => {
      return passwordBlock.methods.encryptedBlock(index).call()
    })
  )
  const thisBlock = blocks[props.query.id]
  return {address, thisBlock}

}

  render() {
    console.log(this.props.thisBlock);
    return (
      <Layout>
        <h3>Edit Block</h3>
        <img
          src={`https://eth.vanity.show/${this.props.address}`}
          alt={`Identicon of ether address ${this.props.address}`}
        />
        <br></br>
        <br></br>
        {this.props.address}
        <br></br>
        <br></br>
        Description:
        <br></br>
        {this.props.thisBlock.description}
        <br></br>
        <br></br>
        Encrypted:
        <br></br>
        {this.props.thisBlock.encrypted}
        {/* <Link route={`/passwordBlocks/${this.props.address}/edit/new`}>
          <a>
            <Button>New Password</Button>
          </a>
        </Link> */}
      </Layout>
    )
  }
}

export default EditBlock
