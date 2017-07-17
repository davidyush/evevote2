import React, { Component } from 'react'

import { css } from 'aphrodite/no-important'
import dropdown from '../../styles/useful/dropdown_styl'

class DropDownArr extends Component {
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
    const { handler } = this.props;

    const value = Number(e.target.value);
    const currentValues = this.state.values.filter(val => val === value);

    currentValues.forEach((val, i, arr) => {
      if(val === value) {
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
    const { handler } = this.props;
    const value = Number(e.target.innerHTML);
    this.setState({
      currentValue: value
    });
    handler && handler(value);
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
          type='number'
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
                key={val}>
                  {val}
              </li>))
            : null
        }
        </ul>
      </div>
    )
  }
}

export default DropDownArr
