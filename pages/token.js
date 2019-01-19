import React, {Component} from 'react'
import factory from '../ethereum/factory'
import web3 from '../ethereum/web3'
import { Button, Table, Header, Card } from 'semantic-ui-react'
import Layout from '../components/Layout'
import { withRouter } from 'next/router'
import EditInput from '../components/EditInput'
import Decrypt from '../components/Decrypt'


class Tokens extends Component {

  async componentDidMount() {

    let num = this.props.url.asPath.split('/')[2]

    // console.log(num);

    const accounts = await web3.eth.getAccounts();
    let token = []

      let owner = await factory.methods.ownerOf(num).call()
      let data = await factory.methods.tokenURI(num).call()
      if (owner == accounts[0]) {
        token.push(data)
      }

    this.setState({token: token, data: '', showInput: false, showDecrypt: false, num: num, decrypted: 'asdf'})

  }

  renderRow() {
    if(this.state) {
      let x = this.state.token
      let ownedToken = x.map((data) => {
        let parsedData = data.split(':')
          return {
            header: parsedData[0],
            description:  parsedData[1] || 'No data encrypted yet!',
            fluid: true
          }
        })
        return <Card.Group items={ownedToken}/>
    }
  }

  onEdit = () => {
    this.setState({showInput: !this.state.showInput})
  }

  onDecrypt = () => {
    this.setState({showDecrypt: !this.state.showDecrypt})
  }


  render() {

    const { Header, Row, HeaderCell, Body } = Table

    if (this.state) {
      console.log(this.x);
          return (
            <Layout>
              <Card>
                {this.renderRow()}
                {this.state.showInput ? <EditInput tokenId = {this.state.num} /> : null}
                {this.state.showDecrypt ? <Decrypt
                  tokenId = {this.state.num}
                  data = {this.state.token}
                 /> : null}
                <Button onClick={this.onDecrypt}>Decrypt Data</Button>
                <Button onClick={this.onEdit}>Edit Data</Button>
              </Card>

            </Layout>
          )
    } else {
      return (
        <Layout>
          <Card>Loading!</Card>
        </Layout>
      )
    }

  }
}

export default Tokens
