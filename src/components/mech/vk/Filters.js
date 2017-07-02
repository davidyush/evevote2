import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeCount, changeAgeFrom, changeAgeTo, changeGender } from '../../../actions/filter_actions'
import { getPeople } from '../../../actions/people_actions'

import { css } from 'aphrodite/no-important'
import filters from '../../../styles/vk/filters_styl'

class Filters extends Component {

  changeCountHandler = (e) => {
    const count = Number(e.target.value) || '';
    const { filter, changeCount, getPeople } = this.props;
    // validate here

    changeCount(count);
    setTimeout(() => {
      getPeople({ ...filter, count: count });
    }, 1000);
  }

  changeAgeFromHandler = (e) => {
    const ageFrom = Number(e.target.value) || '';
    const { filter, changeAgeFrom, getPeople } = this.props;
    //validate here

    changeAgeFrom(ageFrom);
    setTimeout(() => {
      getPeople({ ...filter, age_from: ageFrom });
    }, 1000);
  }

  changeAgeToHandler = (e) => {
    const ageTo = Number(e.target.value) || '';
    const { filter, changeAgeTo, getPeople } = this.props;
    //validate here

    changeAgeTo(ageTo);
    setTimeout(() => {
      getPeople({ ...filter, age_to: ageTo });
    }, 1000);
  }

  genderHandler = (e) => {
    console.log(e.target.parentNode.children);
    const gender = Number(e.target.dataset.gender);
    const { filter, changeGender, getPeople } = this.props;

    changeGender(gender);
    setTimeout(() => {
      getPeople({ ...filter, sex: gender });
    }, 1000);
  }

  // should rewrite it, but i dont know how to do it
  isActiveAny = () => {
    const currentGender = this.props.filter.sex;
    return currentGender === 0;
  }
  isActiveMan = () => {
    const currentGender = this.props.filter.sex;
    return currentGender === 2;
  }

  isActiveWoman = () => {
    const currentGender = this.props.filter.sex;
    return currentGender === 1;
  }


  render() {
    const { filter } = this.props;
    return (
      <div className={css(filters.filters)}>
        <div className={css(filters.formControl)}>
          <label className={css(filters.labelControl)} htmlFor="country">Страна:</label>
          <input className={css(filters.inputControl)} type="text" id='country'/>
        </div>
        <div className={css(filters.formControl)}>
          <label className={css(filters.labelControl)} htmlFor="city">Город:</label>
          <input className={css(filters.inputControl)} type="text" id='city'/>
        </div>
        <div className={css(filters.formControl)}>
          <label className={css(filters.labelControl)} htmlFor="count">Количество:</label>
          <input className={css(filters.inputControl)} value={filter.count} type="number" id='count' onChange={this.changeCountHandler}/>
        </div>
        <div className={css(filters.formControl)}>
          <label className={css(filters.labelControl)} htmlFor="age-from">Возраст от:</label>
          <input className={css(filters.inputControl)} value={filter.ageFrom} type="number" id='age-from' onChange={this.changeAgeFromHandler}/>
        </div>
        <div className={css(filters.formControl)}>
          <label className={css(filters.labelControl)} htmlFor="age-to">Возраст до:</label>
          <input className={css(filters.inputControl)} value={filter.ageTo} type="number" id='age-to' onChange={this.changeAgeToHandler}/>
        </div>
        <div className={css(filters.formControl)}>
          <label className={css(filters.labelControl)}>Пол:</label>
          <div className={css(filters.btnsControl)}>
            <button className={css(filters.btn, this.isActiveWoman() && filters.active)} data-gender='1' onClick={this.genderHandler}>Ж</button>
            <button className={css(filters.btn, this.isActiveAny() && filters.active)} data-gender='0' onClick={this.genderHandler}>Л</button>
            <button className={css(filters.btn, this.isActiveMan() && filters.active)} data-gender='2' onClick={this.genderHandler}>М</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    filter: state.filter
  }
}

export default connect(mapStateToProps, { getPeople, changeCount, changeAgeFrom, changeAgeTo, changeGender })(Filters);
