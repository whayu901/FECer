import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const style = {
  card: {
    display: 'block',
    backgroundColor: '#e5e5e5',
    border: `1px solid #cbcbcb`,
    padding: '12px 15px'
  },
  title: {
    display: 'flex',
    alignItems: 'center'
  }
}

const Card = ({ children, title, icon, body, footer }) =>
  <div style={style.card} className="__card-component">
    <div style={style.title}>
      {title ? <h3 className="__title">{title}</h3> : null}
      {icon ? <span className="__withIcon">{icon}</span> : null}
    </div>
    <div>
      {children
        ? <div>{children}</div>
        : body
          ? <div className="__text-body">{body}</div>
          : null
      }
    </div>
    <div>
      {footer ? footer : null}
    </div>
  </div>

export default Card

Card.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element,
  body: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  footer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
}
