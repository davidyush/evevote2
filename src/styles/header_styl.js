import { StyleSheet } from 'aphrodite/no-important'
import { headerBg, headerLinkColor, headerBgHover, trans, headerHeight, headerWidth } from './const_styl'

const header = StyleSheet.create({
  containerHeader: {
    backgroundColor: headerBg
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    width: headerWidth,
    margin: '0 auto'
  },
  logo: {
    fontSize: '30px',
    padding: '0 20px',
    width: '137px',
    height: headerHeight,
    backgroundColor: headerBg,
    backgroundImage: `url('./imgs/logo.png')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '76%',
    backgroundPositionY: '40%',
    backgroundPositionX: '50%',
    lineHeight: headerHeight,
    transition: trans,
    ':hover': {
      backgroundColor: headerBgHover,
      outline: 'none'
    },
    ':focus': {
      backgroundColor: headerBgHover,
      outline: 'none'
    }
  },
  navLinks: {
    alignSelf: 'stretch',
    display: 'flex',
    width: '40%',
    alignItems: 'center'
  },
  navLink: {
    fontSize: '18px',
    color: headerLinkColor,
    textDecoration: 'none',
    display: 'block',
    boxSizing: 'border-box',
    height: headerHeight,
    width: '120px',
    textAlign: 'center',
    lineHeight: headerHeight,
    backgroundColor: headerBg,
    transition: trans,
    ':hover': {
      backgroundColor: headerBgHover,
      outline: 'none'
    },
    ':focus': {
      backgroundColor: headerBgHover,
      outline: 'none'
    }
  }
});

export default header;
