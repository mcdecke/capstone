import React from 'react'
import {Menu} from 'semantic-ui-react'

export default () => {
  return (
    <Menu style={{marginTop: '10px'}}>
      <Menu.Item>
        PassBlocks
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item>
          Add Block
        </Menu.Item>

        <Menu.Item>
          +
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}
