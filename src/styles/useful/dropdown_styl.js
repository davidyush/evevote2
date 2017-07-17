import { StyleSheet } from 'aphrodite/no-important'

import { dropColor, dropBg, dropBgHover, dropColorHover } from '../const_styl'

const dropItem = {
  border: `1px solid ${dropColor}`,
  padding: '5px',
  boxSizing: 'border-box',
  display: 'block',
  margin: '0 auto',
  fontSize: '16px',
  minWidth: '100%',
  backgroundColor: dropBg,
  '&:focus': {
    outline: 'none'
  }
}

const dropdown = StyleSheet.create({
  container: {
    width: '90%',
    margin: '0 auto',
    // marginTop: '20px',
    position: 'relative'
  },
  list: {
    maxHeight: '155px',
    minWidth: '100%',
    overflowY: 'scroll',
    overflowX: 'hidden',
    boxSizing: 'border-box',
    borderBottom: `1px solid ${dropColor}`,
    // position: 'absolute',
    top: '32px',
    left: '0',
    zIndex: '2'
  },
  dropInput: {
    ...dropItem,
    color: dropColor,
    backgroundColor: dropBg,
    maxHeight: '32px'
  },
  listItem: {
    ...dropItem,
    borderTop: 'none',
    padding: '5px',
    color: dropBgHover,
    ':hover': {
      cursor: 'pointer',
      color: dropColorHover,
      background: dropBgHover,
      borderColor: dropBgHover,
    },
    ':last-child': {
      borderBottom: 'none'
    }
  },
  noBorder: {
    border: 'none'
  }
});

export default dropdown
