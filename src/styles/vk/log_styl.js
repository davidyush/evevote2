import { StyleSheet } from 'aphrodite/no-important'

import { mainPadding, mainBorRadius, logWiner, logLoser, logColor } from '../const_styl'

const log = StyleSheet.create({
  container: {
    display: 'flex',
    padding: mainPadding,
    borderRadius: mainBorRadius,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  wrapPerson: {
    width: '40%',
    display: 'flex',
    justifyContent: 'flex-start',
    padding: mainPadding,
    borderRadius: mainBorRadius,
    alignItems: 'center'
  },
  wrapImg: {
    width: '70px',
    height: '70px',
    marginRight: '20px'
  },
  img: {
    width: '100%',
    borderRadius: '50%'
  },
  name: {
    fontSize: '20px'
  },
  winer: {
    border: `1px solid ${logWiner}`,
    backgroundColor: logWiner,
    color: logColor
  },
  loser: {
    border: `1px solid ${logLoser}`,
    backgroundColor: logLoser,
    color: logColor
  },
  countText: {
    fontSize: '30px'
  }
});

export default log;
