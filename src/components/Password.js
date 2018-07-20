import React, {Component} from 'react'
import {Button, Card} from 'semantic-ui-react'

const Password = ({description, password}) =>  {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{description}</Card.Header>
        <Card.Meta>{password}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Edit
          </Button>
          <Button basic color='red'>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default Password
