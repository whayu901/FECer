import React from 'react'
import PropTypes from 'prop-types'
import './index.stylesheet.css'

const NotificationPanel = ({ clicked, visibility }) => {

  const [height, setHeight] = React.useState()

  React.useEffect(() => {
    const elnotif = document.getElementById('__notification-panel-id')
    if (visibility) {
      setHeight(elnotif.scrollHeight)
    } else {
      setHeight(0)
    }
  }, [visibility, setHeight])

  return (
    <div
      id="__notification-panel-id"
      style={{ maxHeight: `${height}` }}
      className={`__notification-wrapper`}>
      <div className="__nw">
        <div className="__p1">
          By accessing and using this website, you acknowledge that you have read and understand our
          <a href="https://facebook.com" target="_blank" rel="noreferrer noopener"> Cookie Policy</a>,
          <a href="https://facebook.com" target="_blank" rel="noreferrer noopener"> Privacy Policy </a> and our
          <a href="https://facebook.com" target="_blank" rel="noreferrer noopener"> Term of service</a>.
        </div>
        <div className="__p2">
          <div className="__btn __btn-primary" onClick={clicked}>
            Got it
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationPanel

NotificationPanel.propTypes = {
  clicked: PropTypes.func.isRequired,
  visibility: PropTypes.bool.isRequired
}
