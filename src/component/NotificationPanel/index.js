import React from 'react'
import './index.stylesheet.css'

const NotificationPanel = props => {

  const [closed, setClosed] = React.useState(false)

  const handleClose = () => {
    setClosed(!closed)
  }

  return (
    <div id="__notification-panel-id"
         className={`__notification-wrapper${closed ? ' __hide-panel' : ''}`}>
      <div className="__nw">
        <div className="__p1">
          By accessing and using this website, you acknowledge that you have read and understand our
          <a href="https://facebook.com" target="_blank" rel="noreferrer noopener"> Cookie Policy</a>,
          <a href="https://facebook.com" target="_blank" rel="noreferrer noopener"> Privacy Policy </a> and our
          <a href="https://facebook.com" target="_blank" rel="noreferrer noopener"> Term of service</a>.
        </div>
        <div className="__p2">
          <div className="__btn __btn-primary" onClick={handleClose}>
            Got it
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationPanel
