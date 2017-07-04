import { StyleSheet } from 'aphrodite/no-important'

import {
  mainPadding,
  mainBorRadius,
  mainShadow,
  cardsBg,
  loadingColor,
  btnMoreColor,
  btnMoreBgHover,
  btnColorHover,
  countColor,
  countBg,
  trans
} from '../const_styl'

const rotateKeyframes = {
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
}

const cards = StyleSheet.create({
  cardsWrapper: {
    marginTop: '20px',
    padding: mainPadding,
    backgroundColor: cardsBg,
    boxShadow: mainShadow,
    minHeight: '440px',
    borderRadius: mainBorRadius,
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  wrapLoading: {
    width: '100%',
    height: '440px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: `2px solid ${loadingColor}`,
    borderBottomColor: 'transparent',
    animationName: rotateKeyframes,
    animationDuration: '1s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite'
  },
  btnMoreWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnMore: {
    border: `1px solid ${btnMoreColor}`,
    backgroundColor: `transparent`,
    color: btnMoreColor,
    padding: mainPadding,
    width: '100%',
    fontSize: '16px',
    borderRadius: mainBorRadius,
    textAlign: 'center',
    outline: 'none',
    transition: trans,
    ':hover': {
      cursor: 'pointer',
      outline: 'none',
      color: btnColorHover,
      background: btnMoreBgHover,
      border: `1px solid ${btnColorHover}`
    },
    'focus': {
      outline: 'none'
    },
    ':active': {
      outline: 'none'
    },
    ':checked': {
      outline: 'none'
    }
  },
  countTitle: {
    color: countColor,
    backgroundColor: countBg,
    width: '100%',
    // border: `1px solid ${countColor}`,
    marginBottom: '10px',
    boxSizing: 'border-box',
    padding: mainPadding,
    borderRadius: mainBorRadius,
    fontSize: '16px'

  }
});

export default cards;
