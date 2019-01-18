import React, {Component} from 'react'
import factory from '../ethereum/factory'
import web3 from '../ethereum/web3'
import { Button, Table, Header, Card } from 'semantic-ui-react'
import Layout from '../components/Layout'
import { withRouter } from 'next/router'

class Tokens extends Component {

  async componentDidMount() {
    // this.viewTokens()

    let num = this.props.url.asPath.split('/')[2]

    console.log(num);

    const accounts = await web3.eth.getAccounts();
    let token = []

      let owner = await factory.methods.ownerOf(num).call()
      let data = await factory.methods.tokenURI(num).call()
      if (owner == accounts[0]) {
        token.push(data)
      }

    console.log(owner);
    console.log(accounts[0]);

    this.setState({token: token})

  }

  renderRow() {
    if(this.state) {
      let x = this.state.token
      console.log(x);
      // let parsedData = x.split(':')
      // console.log(parsedData);
      let ownedToken = x.map((data) => {
        let parsedData = data.split(':')
        console.log(parsedData);
          return {
            header: parsedData[0],
            description:  parsedData[1] || 'No data encrypted yet!',
            fluid: true
          }
        })
        return <Card.Group items={ownedToken}/>
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
