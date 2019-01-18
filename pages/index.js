import React, {Component} from 'react'
import factory from '../ethereum/factory'
import web3 from '../ethereum/web3'
import { Button, Table, Header, Card } from 'semantic-ui-react'
import Layout from '../components/Layout'


class CampaignIndex extends Component {

//next.js specific
  static  async getInitialProps() {
    const symbol = await factory.methods.symbol().call()
    const name = await factory.methods.name().call()

    return {symbol, name}
  }


  render() {

    const { Header, Row, HeaderCell, Body } = Table

    return (
      <Layout>
        <Card>Home Page</Card>
      </Layout>
    )
  }
}

export default CampaignIndex
