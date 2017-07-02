import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getPair } from '../../../actions/vkvote_actions'

import VkFieldCard from './VkFieldCard'
import Log from './Log'

import { css } from 'aphrodite/no-important'
import vkfield from '../../../styles/vk/vkfield_styl'

class VkField extends Component {
  componentDidMount() {
    const { getPair, peopleVote } = this.props;
    getPair(peopleVote);
  }

  state = {
    steps: 0
  }

  chooseHandler = () => {
    const { getPair, peopleVote } = this.props;
    this.setState({
      steps: this.state.steps + 1
    });
    getPair(peopleVote, 'uid');
  }

  render() {
    const { pair, logs } = this.props;
    if(pair && pair[0]) {
      return (
        <div className={css(vkfield.container)}>
          <h1>{this.state.steps}</h1>
          <VkFieldCard person={pair[0]} pair={pair} chooseHandler={this.chooseHandler} />
          <VkFieldCard person={pair[1]} pair={pair} chooseHandler={this.chooseHandler} />
        </div>
      )
    } else if(logs && logs[0]) {
      return (
        <div className={css(vkfield.containerLog)}>
          { logs.map((log,i) => (
            <Log
              i={i}
              pair={log.pair}
              key={log.winer.uid + log.loser.uid}
              winer={log.winer}
              loser={log.loser}
              winerIndex={log.winerIndex}
              loserIndex={log.loserIndex}
            />
          )) }
        </div>
      )
    } else {
      return (
        <div className={css(vkfield.container)}>
          <h1>~(^.^)~ nothing. lazy.</h1>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    pair: state.vkvote.pair,
    peopleVote: state.vkvote.peopleVote,
    logs: state.vkvote.logs
  }
}

export default connect(mapStateToProps, { getPair })(VkField)
