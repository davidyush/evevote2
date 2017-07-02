import { StyleSheet } from 'aphrodite/no-important'

import { filtersBg, filtersBgBtn, filtersColor, filtersBorderColor, hoverColor, mainBorRadius, mainShadow, mainPadding, trans} from '../const_styl'

const labelInputCtrl = {
  display: 'block',
  width: '90%',
  color: filtersColor,
  boxSizing: 'border-box',
  margin: '0 auto'
};

const filters = StyleSheet.create({
  filters: {
    backgroundColor: filtersBg,
    borderRadius: mainBorRadius,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '370px',
    paddingTop: mainPadding,
    boxShadow: mainShadow
  },
  labelControl: {
    ...labelInputCtrl,
    fontSize: '16px',
    fontWeight: 'bold'
  },
  inputControl: {
    ...labelInputCtrl,
    padding: '7px',
    border: `1px solid ${filtersColor}`,
    fontSize: '14px',
    borderRadius: mainBorRadius,
    backgroundColor: filtersBg,
    transition: trans,
    ':focus': {
      outline: 'none',
      borderColor: filtersBorderColor
    }
  },
  formControl: {
    marginBottom: '10px'
  },
  btnsControl: {
    width: '90%',
    margin: '0 auto',
  },
  btn: {
    width: '33%',
    height: '35px',
    lineHeight: '32px',
    fontSize: '12px',
    textAlign: 'center',
    backgroundColor: 'transparent',
    border: `1px solid ${filtersColor}`,
    color: filtersColor,
    borderRadius: mainBorRadius,
    transition: trans,
    ':hover': {
      backgroundColor: filtersBgBtn,
      color: hoverColor,
      borderColor: filtersBgBtn,
      cursor: 'pointer'
    },
    ':focus': {
      outline: 'none'
    },
    ':first-child': {
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
      borderRight: 'none'
    },
    ':last-child': {
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0,
      borderLeft: 'none'
    },
    ':nth-child(2)': {
      borderRadius: 0,
      ':hover': {
        borderLeft: 'none',
        borderRight: 'none'
      }
    }
  },
  active: {
    backgroundColor: filtersBgBtn,
    color: hoverColor,
    borderColor: filtersBgBtn,
  }
});

export default filters
