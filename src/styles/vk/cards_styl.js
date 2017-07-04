import { StyleSheet } from 'aphrodite/no-important'

import { mainPadding, mainBorRadius, mainShadow, cardsBg, loadingColor, btnMoreBg, btnMoreColor } from '../const_styl'

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
    border: 'none',
    backgroundColor: btnMoreBg,
    color: btnMoreColor,
    padding: mainPadding,
    width: '60%',
    fontSize: '16px',
    borderRadius: mainBorRadius,
    textAlign: 'center',
    outline: 'none',
    ':hover': {
      cursor: 'pointer',
      outline: 'none'
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
  }
});

export default cards;
