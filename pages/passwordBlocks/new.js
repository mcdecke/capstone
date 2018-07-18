import React, {Component} from 'react'
import {Form, Button, Input, Message} from 'semantic-ui-react'
import Layout from '../../src/components/Layout'
import factory from '../../src/ethereum/factory'
import web3 from '../../src/ethereum/web3'
import {Link, Router } from '../../routes'

class NewPassBlock extends Component {

  state = {
    description: '',
    errorMessage: '',
    loading: false
  }

  onSubmit = async (event) => {
    event.preventDefault()

    this.setState({loading: true, errorMessage: ''})

    let e = PasswordFactory.ContractCreated(function(error, result){
      if(!error)
        console.log(result);
    })

    try {
      const accounts = await web3.eth.getAccounts()
      console.log(accounts[0]);

      await factory.methods
      //could rewrite smart contract to have default values, instead of creating the block then populating it.
      // .createPasswordBlock(this.state.description)
        .createPasswordBlock().send({from: accounts[0]}
        //   , function(err, transactionHash) {
        //   if (!err)
        //     console.log(transactionHash);
        // }
      )
        // Router.pushRoute('/')
    } catch (err) {
      this.setState({errorMessage: err.message})
    }

    this.setState({loading: false})
  }

  render() {
    return (<Layout>
      <h3>Create a New Password Block
      </h3>

      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Add a Description</label>
          <Input label="Description" labelPosition="right" value={this.state.description} onChange={event => this.setState({description: event.target.value})}/>
        </Form.Field>

        <Message error="error" header="Oops!" content={this.state.errorMessage}/>
        <Button loading={this.state.loading} primary="primary">Create!</Button>
      </Form>

    </Layout>)
  }
}

export default NewPassBlock
