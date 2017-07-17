import React, { Component } from 'react'
import { connect } from 'react-redux'

import DropDown from '../../useful/DropDown'
import DropDownArr from '../../useful/DropDownArr'

import { changeCount,
  changeAgeFrom,
  changeAgeTo,
  changeGender,
  changeCountry,
  changeCity,
  changeRelation
} from '../../../actions/filter_actions'

import { getPeople, setOffset } from '../../../actions/people_actions'
import { getCountries, getCities } from '../../../actions/vkdb_actions'

import { css } from 'aphrodite/no-important'
import filters from '../../../styles/vk/filters_styl'

class Filters extends Component {
  constructor() {
    super();
    const relationList = [
      { rid: 1, title: 'не женат (не замужем)'},
      { rid: 2, title: 'встречается'},
      { rid: 3, title: 'помолвлен(-а)'},
      { rid: 4, title: 'женат (замужем)'},
      { rid: 5, title: 'всё сложно'},
      { rid: 6, title: 'в активном поиске'},
      { rid: 7, title: 'влюблен(-а)'},
      { rid: 8, title: 'в гражданском браке'},
    ];
    this.state = {
      counts: Array.from(Array(101).keys()),
      ages: Array.from(Array(121).keys()),
      relationList: relationList
    }
  }
  componentDidMount() {
    this.props.getCountries();
  }

  // changeCountHandler = (e) => {
  //   const count = Number(e.target.value) || '';
  //   const { filter, changeCount, getPeople, setOffset } = this.props;
  //   // validate here
  //
  //   changeCount(count);
  //   setOffset(count);
  //   setTimeout(() => {
  //     getPeople({ ...filter, count: count });
  //   }, 1000);
  // }

  // changeAgeFromHandler = (e) => {
  //   const ageFrom = Number(e.target.value) || '';
  //   const { filter, changeAgeFrom, getPeople } = this.props;
  //   //validate here
  //
  //   changeAgeFrom(ageFrom);
  //   setTimeout(() => {
  //     getPeople({ ...filter, age_from: ageFrom });
  //   }, 1000);
  // }

  // changeAgeToHandler = (e) => {
  //   const ageTo = Number(e.target.value) || '';
  //   const { filter, changeAgeTo, getPeople } = this.props;
  //   //validate here
  //
  //   changeAgeTo(ageTo);
  //   setTimeout(() => {
  //     getPeople({ ...filter, age_to: ageTo });
  //   }, 1000);
  // }

  genderHandler = (e) => {
    // console.log(e.target.parentNode.children);
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

  // changeCountryHandler = (e) => {
  //   const { filter, countries, changeCountry, getPeople } = this.props;
  //   const currentCountry = e.target.value.toUpperCase();
  //   countries.forEach(country => {
  //     if(country.title.toUpperCase() === currentCountry) {
  //       changeCountry(country.cid);
  //       setTimeout(() => {
  //         getPeople({ ...filter, country: country.cid });
  //       }, 1000);
  //     }
  //
  //   });
  // }

  countryHandler = (country) => {
    const { filter, changeCountry, getPeople, getCities } = this.props;
    changeCountry(country.cid);
    getPeople({ ...filter, country: country.cid, city: '' });
    getCities(country.cid);
  }

  searchCityHandler = (city) => {
    const { filter, getCities } = this.props;
    getCities(filter.country, city);
  }

  cityHandler = (city) => {
    const { filter, changeCity, getPeople } = this.props;
    changeCity(city.cid);
    getPeople({ ...filter, city: city.cid });
  }

  countHandler = (count) => {
    const { filter, changeCount, getPeople } = this.props;
    const num = Number(count);
    changeCount(num);
    getPeople({ ...filter, count: num });
  }

  ageFromHandler = (ageFrom) => {
    const { filter, changeAgeFrom, getPeople } = this.props;
    const num = Number(ageFrom);
    changeAgeFrom(num);
    getPeople({ ...filter, count: num });
  }

  ageToHandler = (ageTo) => {
    const { filter, changeAgeTo, getPeople } = this.props;
    const num = Number(ageTo);
    changeAgeTo(num);
    getPeople({ ...filter, count: num });
  }

  relationHandler = (relation) => {
    const { filter, changeRelation, getPeople } = this.props;
    changeRelation(relation.rid);
    getPeople({ ...filter, relation: relation.rid });
  }
  // changeCityHandler = (e) => {
  //   const { filter, cities ,changeCity, getPeople, getCities } = this.props;
  //   const currentCity = e.target.value.toUpperCase();
  //   getCities(filter.country, currentCity);
  //   if(cities && cities[0]) {
  //     cities.forEach(city => {
  //       if(city.title.toUpperCase() === currentCity) {
  //         changeCity(city.cid);
  //         setTimeout(() => {
  //           getPeople({ ...filter, city: city.cid });
  //         }, 1000);
  //       }
  //     });
  //   }
  //
  // }

  render() {
    const { filter, countries, cities } = this.props;
    const { counts, ages, relationList } = this.state;
    return (
      <div className={css(filters.filters)}>
        <div className={css(filters.formControl)}>
          <DropDown place='Country' values={countries} idName='cid' titleName='title' handler={this.countryHandler}/>
        </div>
        <div className={css(filters.formControl)}>
          <DropDown place='City' values={cities} idName='cid' titleName='title' handler={this.cityHandler} searchHandler={this.searchCityHandler}/>
        </div>
        <div className={css(filters.formControl)}>
          <DropDown place='Relation' values={relationList} idName='rid' titleName='title' handler={this.relationHandler}/>
        </div>
        {/* <div className={css(filters.formControl)}>
          <label className={css(filters.labelControl)} htmlFor="country">Страна:</label>
          <input className={css(filters.inputControl)} type="text" id='country' onChange={this.changeCountryHandler}/>
        </div>
        <div className={css(filters.formControl)}>
          <label className={css(filters.labelControl)} htmlFor="city">Город:</label>
          <input className={css(filters.inputControl)} type="text" id='city' onChange={this.changeCityHandler}/>
        </div> */}

        <div className={css(filters.formControl)}>
          <DropDownArr place='Count' values={counts} handler={this.countHandler}/>
        </div>
        <div className={css(filters.formControl)}>
          <DropDownArr place='Age from' values={ages} handler={this.ageFromHandler}/>
        </div>
        <div className={css(filters.formControl)}>
          <DropDownArr place='Age to' values={ages} handler={this.ageToHandler}/>
        </div>
        {/* <div className={css(filters.formControl)}>
          <label className={css(filters.labelControl)} htmlFor="count">Количество:</label>
          <input className={css(filters.inputControl)} value={filter.count} type="number" id='count' onChange={this.changeCountHandler}/>
        </div>
        <div className={css(filters.formControl)}>
          <label className={css(filters.labelControl)} htmlFor="age-from">Возраст от:</label>
          <input className={css(filters.inputControl)} value={filter.age_from} type="number" id='age-from' onChange={this.changeAgeFromHandler}/>
        </div>
        <div className={css(filters.formControl)}>
          <label className={css(filters.labelControl)} htmlFor="age-to">Возраст до:</label>
          <input className={css(filters.inputControl)} value={filter.age_to} type="number" id='age-to' onChange={this.changeAgeToHandler}/>
        </div>*/}
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
    filter: state.filter,
    countries: state.vkdb.countries,
    cities: state.vkdb.cities
  }
}

export default connect(mapStateToProps, {
  getPeople,
  setOffset,
  changeCount,
  changeAgeFrom,
  changeAgeTo,
  changeGender,
  getCountries,
  changeCountry,
  getCities,
  changeCity,
  changeRelation
})(Filters);
