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
    passwordCount: 1,
    passwordList: []
  }

  onAddPassword = (e) => {
    e.preventDefault()

    this.setState({
      passwordCount: this.state.passwordCount + 1
    })

    for (var i = 0; i < this.state.passwordCount - 1; i++) {
      console.log(this.state.passwordCount);
      this.state.passwordList[i + 1] = (
      <div className='PassDesc'>
      <Form.Field>
        <label>Add a Description</label>
        <Input label="Description" labelPosition="right"/>
      </Form.Field>

      <Form.Field>
        <label>Add Password</label>
        <Input label="Password" labelPosition="right"/>
      </Form.Field>
    </div>
    )
    }
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

    return (<Layout>
      <h3>Create a New Password Block</h3>
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>

        <div className='PassDesc'>
        <Form.Field>
          <label>Add a Description</label>
          <Input label="Description" labelPosition="right"/>
        </Form.Field>

        <Form.Field>
          <label>Add Password</label>
          <Input label="Password" labelPosition="right"/>
        </Form.Field>
      </div>

        <div addPassword={this.props.addPassword}>
          {this.state.passwordList}
        </div>

        <br></br>
        <Button primary="primary" onClick={((e) => this.onAddPassword(e))}>Add Another Password!</Button>

        <Message error="error" header="Oops!" content={this.state.errorMessage}/>
        <br></br>
        <br></br>
        <br></br>
        <Button loading={this.state.loading} primary="primary">Encrypt Passwords!</Button>
      </Form>
    </Layout>)
  }
}

export default NewPassBlock
