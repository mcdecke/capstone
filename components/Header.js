import React from 'react'
import {Menu} from 'semantic-ui-react'
import { Link, Router } from '../routes'

export default () => {
  return (
    <Menu>
      <Menu.Item>
        <Link route={`/tokens`}>
          <a>Tokens</a>
        </Link>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Link route={`/new`}>
            <a>New</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link route={`/new`}>
            <a>+</a>
          </Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}
