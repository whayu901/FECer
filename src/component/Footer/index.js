import React from 'react'

const style = {
  footerWrapper: {
    display: 'block',
    width: '100%',
    height: 'auto',
    padding: '1rem 0',
    backgroundColor: '#004a75',
    textAlign: 'center'
  },
  footerContent: {
    color: 'white',
    display: 'inline-block',
  }
}

const Footer = () =>
  <div style={style.footerWrapper}>
    <div style={style.footerContent}><span role="img" aria-label="copyright">©️</span> 2019 Adi Hermawan. All rights reserved.</div>
  </div>

export default Footer
