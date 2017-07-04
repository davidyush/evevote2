import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { handleLogin } from '../../../actions/user_actions'
import { clonePeople, clearLog } from '../../../actions/vkvote_actions'

import InputReq from './InputReq'
import Cards from './Cards'
import Filters from './Filters'

import { css } from 'aphrodite/no-important'
import vkmain from '../../../styles/vk/vkmain_styl'


class VkMain extends Component {

  clone = () => {
    const { people, clonePeople, clearLog } = this.props;
    const newPeople = people.map(person => {
      person.wins = [];
      person.loses = [];
      return person;
    });
    clonePeople(newPeople);
    clearLog();
  }

  render() {
    const { people } = this.props;
    return (
      <div className={css(vkmain.vkContainer)}>
        <div className={css(vkmain.leftSide)}>
          <InputReq/>
          <Cards people={people}/>
        </div>
        <div className={css(vkmain.rightSide)}>
          <div className={css(vkmain.btnWrap)}>
            <a className={css(vkmain.vkBtn)} onClick={this.props.handleLogin}>Login Vk</a>
          </div>
          <Filters/>
          <div className={css(vkmain.btnWrap, vkmain.vkGo)}>
            <Link onClick={this.clone} className={css(vkmain.vkBtn)} to='/vkvote'>Vote</Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    people: state.people.people
  }
}

export default connect(mapStateToProps, { handleLogin, clonePeople, clearLog })(VkMain)
