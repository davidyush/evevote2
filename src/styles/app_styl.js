import { StyleSheet } from 'aphrodite/no-important'
import { appBg } from './const_styl'

const app = StyleSheet.create({
  mainContainer: {
    backgroundColor: appBg,
    minHeight: '83%',
    boxSizing: 'border-box',
    paddingTop: '30px',
    paddingBottom: '30px'
  },
  wholeWrapper: {
    height: '100%'
  },
  mainContent: {
    width: '82%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between'
  }
});

export default app;
