import { StyleSheet } from 'aphrodite/no-important'

import { mainPadding, mainBorRadius, mainShadow, cardsBg, loadingColor } from '../const_styl'

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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start'
  },
  wrapLoading: {
    width: '100%',
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
  }
});

export default cards;
