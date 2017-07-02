import { StyleSheet } from 'aphrodite/no-important'

import { footerColor, footerBg } from './const_styl'

const footer =  StyleSheet.create({
  footer: {
    backgroundColor: footerBg,
    height: '60px',
    color: footerColor,
    padding: '0px 100px'
  }
});

export default footer
