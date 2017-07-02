import { StyleSheet } from 'aphrodite/no-important'

import { mainBorRadius, mainShadow, trans } from '../const_styl'

const vkfieldcard = StyleSheet.create({
  container: {
    maxWidth: '300px',
    boxSizing: 'border-box',
    transition: trans,
    ':hover': {
      cursor: 'pointer',
      boxShadow: mainShadow
    }
  },
  wrapperImg: {
    minWidth: '300px',
    maxWidth: '300px',
    maxHeight: '300px',
    overflow: 'hidden'
  },
  img: {
    width: '100%',
    borderRadius: mainBorRadius
  }
});

export default vkfieldcard;
