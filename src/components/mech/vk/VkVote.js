import React, { PureComponent } from 'react'

import VkLadder from './VkLadder'
import VkField from './VkField'

import { css } from 'aphrodite/no-important'
import vkvote from '../../../styles/vk/vkvote_styl'

class VkVote extends PureComponent {
  render() {
    return (
      <div className={css(vkvote.vkContainer)}>
        <div className={css(vkvote.leftSide)}>
          <VkField/>
        </div>
        <div className={css(vkvote.rightSide)}>
          <VkLadder/>
        </div>
      </div>
    )
  }
}

export default VkVote
