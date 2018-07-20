import React, {Component} from 'react'
import {Button, Card, Input} from 'semantic-ui-react'

const Password = ({description, password, submitter, edit, disabled}) =>  {

  return (
      <Card>
        <Card.Content>
          <Card.Header>{description}</Card.Header>
          <Card.Meta>
            <label>Password</label>
            <Input placeholder={password} label="Password" labelPosition="right" disabled={disabled} />
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button onClick={((event) => submitter(event, 'edit'))} basic color='green'>
              {edit}
            </Button>
            <Button onClick={((event) => submitter(event, 'delete'))} basic color='red'>
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
    )
}

export default Password
