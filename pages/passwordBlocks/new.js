import React, {Component} from 'react'
import {Form, Button, Input, Message} from 'semantic-ui-react'
import Layout from '../../src/components/Layout'
import factory from '../../src/ethereum/factory'
import web3 from '../../src/ethereum/web3'
import {Link, Router} from '../../routes'

class NewPassBlock extends Component {

  state = {
    description: '',
    errorMessage: '',
    loading: false,
    passwords: []
  }

  onSubmit = async (event) => {
    event.preventDefault()
    this.setState({loading: true, errorMessage: ''})
    try {
      const accounts = await web3.eth.getAccounts()
      console.log(accounts[0]);
      await factory.methods.createPasswordBlock(this.state.description, this.state.password).send({from: accounts[0]})
      Router.pushRoute('/')
    } catch (err) {
      this.setState({errorMessage: err.message})
    }
    this.setState({loading: false})
  }

  render() {
    return (
    <Layout>
      <h3>Create a New Password Block</h3>
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        {/* <Form.Field>
          <label>Add a Description for the Password Block</label>
          <Input label="Block Description" labelPosition="right" value={this.state.blockDescription} onChange={event => this.setState({blockDescription: event.target.value})}/>
        </Form.Field> */}

        <Form.Field>
          <label>Add a Description</label>
          <Input label="Description" labelPosition="right" value={this.state.description} onChange={event => this.setState({description: event.target.value})}/>
        </Form.Field>

        <Form.Field>
          <label>Add Password</label>
          <Input label="Password" labelPosition="right" value={this.state.password} onChange={event => this.setState({password: event.target.value})}/>
        </Form.Field>

        <Message error="error" header="Oops!" content={this.state.errorMessage}/>
        <Button loading={this.state.loading} primary="primary">Add Password!</Button>
      </Form>
    </Layout>
    )
  }
}

export default NewPassBlock
