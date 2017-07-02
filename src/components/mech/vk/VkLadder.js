import React from 'react'
import { connect } from 'react-redux'

import sorter from '../../../helpers/sorter'

import { css } from 'aphrodite/no-important'
import vkladder from '../../../styles/vk/vkladder_styl'

const Ladder = ({ peopleLader }) => (
  <ul className={css(vkladder.container)}>
    { peopleLader.map(person => (
        <li key={person.uid} className={css(vkladder.ladderPerson)}>
          <div className={css(vkladder.wrapperImg)}>
            <img className={css(vkladder.img)} src={person.photo_200 || person.photo_100} alt='жалок'/>
          </div>
          <p className={css(vkladder.name)}>{person.first_name} {person.last_name}</p>
          <p>
            <span className={css(vkladder.wins)}>{person.wins.length}</span>
            <span className={css(vkladder.loses)}>{person.loses.length}</span>
          </p>
        </li>
    )) }
  </ul>
);

function mapStateToProps(state) {
  return {
    peopleLader: state.vkvote.peopleVote.sort(sorter)
  }
}

export default connect(mapStateToProps, null)(Ladder)
