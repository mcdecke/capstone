import React, {Component} from 'react'
import factory from '../ethereum/factory'
import web3 from '../ethereum/web3'
import { Button, Table, Header, Card } from 'semantic-ui-react'
import Layout from '../components/Layout'

class Tokens extends Component {

  async componentDidMount() {
    // this.viewTokens()

    const accounts = await web3.eth.getAccounts();
    let tokens = []

    for (var i = 0; i < 6; i++) {
      let owner = await factory.methods.ownerOf(i).call()
      let data = await factory.methods.tokenURI(i).call()
      if (owner == accounts[0]) {
        tokens.push(data)
      }
    }

    this.setState({tokens: tokens})

  }

  renderRow() {
    if(this.state) {
      let x = this.state.tokens
      console.log(x);
      let ownedTokens = x.map((data) => {

          return {
            header: data,
            description: <a>data</a>,
            fluid: true
          }
        })
        return <Card.Group items={ownedTokens}/>
    }
  }


  render() {

    const { Header, Row, HeaderCell, Body } = Table

    return (
      <Layout>
        <Card>{this.renderRow()}</Card>
      </Layout>
    )
  }
}

export default Tokens
