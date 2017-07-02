import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeQuery } from '../../../actions/filter_actions'
import { getPeople } from '../../../actions/people_actions'

import { css } from 'aphrodite/no-important'
import inputreq from '../../../styles/vk/inputreq_styl'

class InputReq extends Component {

  changeHandler = (e) => {
    const { changeQuery } = this.props;
    changeQuery(e.target.value);
  }

  submitHandler = (e) => {
    e.preventDefault();
    const { getPeople, filter } = this.props;
    getPeople(filter);
  }

  render() {
    let { q } = this.props.filter;
    return (
      <form className={css(inputreq.vkForm)} onSubmit={this.submitHandler}>
        <input
          className={css(inputreq.vkInput)}
          onChange={this.changeHandler}
          value={q}
          type="text"
          placeholder='whatever nevermind'
          autoFocus
        />
        <button
          className={css(inputreq.vkSubmit)}
          onClick={this.submitHandler}>
            Submit
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    filter: state.filter
  }
}

export default connect(mapStateToProps, { getPeople, changeQuery })(InputReq);
