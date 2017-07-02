import { StyleSheet } from 'aphrodite/no-important'

import { reqBg, borderReqHover, borderReq, mainShadow, trans, mainPadding, mainBorRadius } from '../const_styl'

const inputreq = StyleSheet.create({
  vkForm: {
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    backgroundColor: reqBg,
    padding: mainPadding,
    boxShadow: mainShadow,
    borderRadius: mainBorRadius
  },
  vkInput: {
    border: `1px solid ${borderReq}`,
    borderRadius: mainBorRadius,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    padding: mainPadding,
    fontSize: '16px',
    background: reqBg,
    display: 'block',
    color: borderReq,
    transition: trans,
    width: '75%',
    ':focus': {
      outline: 'none',
      borderColor: borderReqHover
    }
  },
  vkSubmit: {
    border: `1px solid ${borderReq}`,
    borderRadius: mainBorRadius,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeft: 'none',
    color: borderReq,
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: reqBg,
    display: 'block',
    transition: trans,
    width: '25%',
    ':hover': {
      outline: 'none',
      backgroundColor: borderReqHover,
      color: '#fff',
      cursor: 'pointer',
      borderColor: borderReqHover
    },
    ':focus': {
      outline: 'none'
    }
  }
});

export default inputreq;
