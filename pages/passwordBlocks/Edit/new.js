import React, { Component } from 'react'
import { Form, Button, Message, Input } from 'semantic-ui-react'
import PasswordBlock from '../../../src/ethereum/passwordBlock'
import web3 from '../../../src/ethereum/web3'
import {Link, Router} from '../../../routes'
import Layout from '../../../src/components/Layout'

class EditPassword extends Component {
  state = {
    description: '',
    password: '',
    loading: false,
    errorMessage: ''
  }

  static async getInitialProps(props){
    const {address} = props.query
    return {address}
  }

  onSubmit = async event => {
    event.preventDefault()
    this.setState({loading: true})
    const passwordBlock = PasswordBlock(this.props.address)
    const { description, password } = this.state

    //need some encryption here, and to pull in the other pwds.

    try {
      const accounts = await web3.eth.getAccounts()
      await passwordBlock.methods.createBlock(
        description, password
      ).send({from: accounts[0]})
      Router.pushRoute(`/campaigns/${this.props.address}/`)
    } catch (err) {
      this.setState({errorMessage: err.message})
    }

    this.setState({loading: false})
  }

  render(){
    return (
      <Layout>
        <Link route={`/passwordBlocks/${this.props.address}/edit`}>
          <a>
            Back
          </a>
        </Link>
        <h3>Add a New Password</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Description</label>
            <Input
              value={this.state.description}
              onChange={event => this.setState({description: event.target.value})}
            />
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <Input
              value={this.state.password}
              onChange={event => this.setState({password: event.target.value})}
            />
          </Form.Field>

          <Message error header="Uh Oh!" content={this.state.errorMessage} />
          <Button primary loading={this.state.loading}>Create!</Button>
        </Form>
      </Layout>
    )
  }
}

export default EditPassword
