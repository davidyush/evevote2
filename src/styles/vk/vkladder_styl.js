import { StyleSheet } from 'aphrodite/no-important'

import { ladderLoser, ladderWiner, ladderName, ladderBg, mainShadow, mainPadding, mainBorRadius } from '../const_styl'

const vkladder = StyleSheet.create({
  container: {
    backgroundColor: ladderBg,
    boxShadow: mainShadow,
    borderRadius: mainBorRadius,
    padding: mainPadding,
    minHeight: '550px'
  },
  ladderPerson: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '5px',
    paddingBottom: '5px',
    borderBottom: '1px solid #ccc',
    ':last-child': {
      borderBottom: 'none'
    }
  },
  wrapperImg: {
    width: '50px',
    height: '50px',
    borderRadius: '50%'
  },
  img: {
    width: '100%',
    borderRadius: '50%'
  },
  name: {
    color: ladderName
  },
  wins: {
    color: 'white',
    backgroundColor: ladderWiner,
    padding: '5px 10px',
    borderRadius: '30px',
    boxSizing: 'border-box',
    marginRight: '5px',
    fontSize: '14px'
  },
  loses: {
    color: 'white',
    backgroundColor: ladderLoser,
    padding: '5px 10px',
    borderRadius: '30px',
    boxSizing: 'border-box',
    fontSize: '14px'
  }
});

export default vkladder
