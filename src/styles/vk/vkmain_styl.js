import { StyleSheet } from 'aphrodite/no-important'

import { btnHover, mainBg, mainColor, mainShadow, mainPadding, mainBorRadius, trans } from '../const_styl'

const vkmain = StyleSheet.create({
  leftSide: {
    width: '78%',
    marginRight: '20px',
    boxSizing: 'border-box',
  },
  rightSide: {
    width: '20%',
    boxSizing: 'border-box'
  },
  vkContainer: {
    width: '100%',
    display: 'flex',
  },
  btnWrap: {
    backgroundColor: mainBg,
    boxSizing: 'border-box',
    boxShadow: mainShadow,
    padding: mainPadding,
    borderRadius: mainBorRadius,
    marginBottom: '20px'
  },
  vkBtn: {
    display: 'block',
    width: '100%',
    boxSizing: 'border-box',
    border: `1px solid ${btnHover}`,
    backgroundColor: mainBg,
    padding: mainPadding,
    borderRadius: mainBorRadius,
    color: mainColor,
    textAlign: 'center',
    transition: trans,
    ':hover': {
      cursor: 'pointer',
      color: 'white',
      backgroundColor: btnHover
    }
  },
  vkGo: {
    marginTop: '20px'
  }
});

export default vkmain
