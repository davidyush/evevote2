import React from 'react'

import { css } from 'aphrodite/no-important'
import log from '../../../styles/vk/log_styl'

const Log = ({ winer, loser, i, pair, winerIndex, loserIndex }) => (
  <div className={css(log.container)}>
    <div className={css(log.countWrap)}>
      <h2 className={css(log.countText)}>{i + 1}.</h2>
    </div>

    <div className={css(log.wrapPerson, pair[0].uid === pair[winerIndex].uid ? log.winer : log.loser)}>
      <div className={css(log.wrapImg)}>
        <img className={css(log.img)} alt='yo' src={pair[0].photo_100 || pair[0].photo_200}/>
      </div>
      <h2 className={css(log.name)}>{pair[0].first_name} {pair[0].last_name}</h2>
    </div>

    <div className={css(log.countWrap)}>
      <h2 className={css(log.countText)}>
        { pair[0].uid === pair[winerIndex].uid ? '>' : '<' }
      </h2>
    </div>

    <div className={css(log.wrapPerson, pair[1].uid === pair[loserIndex].uid ? log.loser : log.winer)}>
      <div className={css(log.wrapImg)}>
        <img className={css(log.img)} alt='yo' src={pair[1].photo_100 || pair[1].photo_200}/>
      </div>
      <h2 className={css(log.name)}>{pair[1].first_name} {pair[1].last_name}</h2>
    </div>

  </div>
);

export default Log
