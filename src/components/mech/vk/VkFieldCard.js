import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { updateLadder, makeLog } from '../../../actions/vkvote_actions'

import { css } from 'aphrodite/no-important'
import vkfieldcard from '../../../styles/vk/vkfieldcard_styl'

class VkFieldCard extends PureComponent {

  clickHandler = () => {
    const { chooseHandler, pair, person, updateLadder, makeLog } = this.props;

    // const winer = pair.filter(hum => hum.uid === person.uid)[0];
    // const loser = pair.filter(hum => hum.uid !== person.uid)[0];

    const winerIndex = pair.findIndex(el => el.uid === person.uid);
    const winer = pair[winerIndex];

    const loserIndex = winerIndex === 0 ? 1 : 0;
    const loser = pair[loserIndex];


    // should send pair and index of winer, loser
    makeLog({
      winer,
      loser,
      pair,
      winerIndex,
      loserIndex
    });

    updateLadder(winer, loser);

    chooseHandler();
  }

  render() {
    const { photo_400_orig, photo_200, photo_100, first_name,
            last_name, status, about } = this.props.person;
    return (
      <div className={css(vkfieldcard.container)} onClick={this.clickHandler}>
        <div className={css(vkfieldcard.wrapperImg)}>
          <img className={css(vkfieldcard.img)} alt='x' src={photo_400_orig || photo_200 || photo_100}/>
        </div>
        <h2>{first_name} {last_name}</h2>
        <p>{status}</p>
        <p>{about}</p>
      </div>
    )
  }
}

export default connect(null, { updateLadder, makeLog })(VkFieldCard);
