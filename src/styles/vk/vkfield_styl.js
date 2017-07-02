import { StyleSheet } from 'aphrodite/no-important'
import { fieldBg, mainShadow, mainPadding, mainBorRadius } from '../const_styl'


const vkfield = StyleSheet.create({
  container: {
    backgroundColor: fieldBg,
    boxShadow: mainShadow,
    padding: mainPadding,
    borderRadius: mainBorRadius,
    minHeight: '550px',
    display: 'flex',
    justifyContent: 'space-around'
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
  },
  containerLog: {
    backgroundColor: fieldBg,
    boxShadow: mainShadow,
    padding: mainPadding,
    borderRadius: mainBorRadius,
    minHeight: '550px',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  }
});

export default vkfield
