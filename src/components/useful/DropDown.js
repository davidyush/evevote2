import React, { Component } from 'react'

import { css } from 'aphrodite/no-important'
import dropdown from '../../styles/useful/dropdown_styl'

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      currentValue: '',
      values: [],
      viewValues: []
    }
  }

  componentWillReceiveProps(newValues) {
    this.setState({
      values: newValues.values || [],
      viewValues: newValues.values || []
    });
  }

  changeHandler = (e) => {
    const { titleName, handler, searchHandler } = this.props;

    const value = e.target.value;
    searchHandler && searchHandler(value);
    const currentValues = this.state.values.filter(val => val[titleName].startsWith(value));

    currentValues.forEach((val, i, arr) => {
      if(val[titleName] === value) {
        handler && handler(val);
        this.closeHandler();
      } else {
        this.openHandler();
      }
    });

    this.setState({
      currentValue: value,
      viewValues: currentValues
    });


  }

  openHandler = () => {
    this.setState({
      open: true
    });
  }

  closeHandler = () => {
    this.setState({
      open: false
    });
  }

  selectItem = (e) => {
    const { titleName, handler } = this.props;
    this.setState({
      currentValue: e.target.innerHTML
    });
    handler && handler(this.state.values.filter(country => country[titleName] === e.target.innerHTML)[0]);
  }

  render() {
    const { currentValue, open, viewValues } = this.state;
    return (
      <div className={css(dropdown.container)}>
        <input
          className={css(dropdown.dropInput)}
          onFocus={this.openHandler}
          onChange={this.changeHandler}
          value={currentValue}
          placeholder={this.props.place}
          type='text'
        />
        <ul
          className={css(dropdown.list, viewValues.length === 0 || !open ? dropdown.noBorder : null)}
          onClick={this.closeHandler}>
        {
          open
            ? viewValues.map( (val, i) => (
              <li
                onClick={this.selectItem}
                className={css(dropdown.listItem)}
                key={val[this.props.idName]}>
                  {val[this.props.titleName]}
              </li>))
            : null
        }
        </ul>
      </div>
    )
  }
}

export default DropDown
