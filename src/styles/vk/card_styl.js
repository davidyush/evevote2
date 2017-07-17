import { StyleSheet } from 'aphrodite/no-important'

import { cardsTitleBg, mainBorRadius, mainShadow, mainPadding, trans, removeColor, cardsColor } from '../const_styl'

const card = StyleSheet.create({
  cardWrapper: {
    marginBottom: '10px',
    marginRight: '1.5%',
    maxHeight: '189.5px',
    maxWidth: '150px',
    borderRadius: mainBorRadius,
    boxShadow: mainShadow,
    overflow: 'hidden',
    position: 'relative',
    ':nth-child(5n)': {
      marginRight: 0
    }
  },
  cardImgWrapper: {
    width: '150px',
    height: '150px',
    boxSizing: 'border-box'
  },
  cardImg: {
    minHeight: '150px',
    minWidth: '150px',
    width: '100%',
    borderTopLeftRadius: mainBorRadius,
    borderTopRightRadius: mainBorRadius
  },
  cardTitle: {
    borderBottomLeftRadius: mainBorRadius,
    borderBottomRightRadius: mainBorRadius,
    padding: mainPadding,
    backgroundColor: cardsTitleBg
  },
  cardText: {
    color: cardsColor,
    ':hover': {
      textDecoration: 'underline'
    }
  },
  remove: {
    backgroundColor: removeColor,
    width: '20px',
    height: '20px',
    fontSize: '10px',
    color: cardsColor,
    position: 'absolute',
    top: '5px',
    right: '5px',
    borderRadius: '50%',
    lineHeight: '20px',
    textAlign: 'center',
    border: 'none',
    transition: trans,
    opacity: '.2',
    ':hover': {
      cursor: 'pointer',
      opacity: '1'
    },
    ':focus': {
      outline: 'none'
    }
  }
});

export default card;
