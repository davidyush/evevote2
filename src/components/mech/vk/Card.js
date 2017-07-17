import React, { PureComponent } from 'react'

import { css } from 'aphrodite/no-important'
import card from '../../../styles/vk/card_styl'

class Card extends PureComponent {

  remove = () => {
    const { uid, removePerson } = this.props;
    removePerson(uid);
  }

  render() {
    const { fullName, img, uid } = this.props;
    return (
      <div className={css(card.cardWrapper)}>
        <div className={css(card.cardImgWrapper)}>
          <img className={css(card.cardImg)} src={img} alt='человечишко'/>
        </div>
        <div className={css(card.cardTitle)}>
          <a rel="noopener noreferrer" target="_blank" href={`https://vk.com/id${uid}`} className={css(card.cardText)}>{fullName}</a>
        </div>
        <button className={css(card.remove)} onClick={this.remove}>X</button>
      </div>
    )
  }
}

export default Card;
