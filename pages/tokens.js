import React, {Component} from 'react'
import factory from '../ethereum/factory'
import web3 from '../ethereum/web3'
import { Button, Table, Header, Card } from 'semantic-ui-react'
import Layout from '../components/Layout'

import { Link, Router } from '../routes'

class Tokens extends Component {

  async componentDidMount() {
    // this.viewTokens()

    const accounts = await web3.eth.getAccounts();
    let tokens = []

    for (var i = 0; i < 1; i++) {
      let owner = await factory.methods.ownerOf(i).call()
      let data = await factory.methods.tokenURI(i).call()

      console.log(owner);
      if (owner == accounts[0]) {
        tokens.push(data)
      }
    }

    console.log(tokens);
    this.setState({tokens: tokens})

  }

  renderRow() {
    if(this.state) {
      let x = this.state.tokens
      console.log(x);
      let ownedTokens = x.map((data) => {
        let name = data.split(':')
        console.log(name);
          return {
            header: name[0],
            description: <a>{name[1]}</a>,
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
