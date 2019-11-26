import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const style = {
  card: {
    display: 'block',
  },
  title: {
    display: 'flex',
    alignItems: 'center'
  }
}

const Card = ({
  children,
  title,
  icon,
  body,
  footer,
  isDefault,
  className,
}) => {
  const classname = ("string" === typeof className)
    ? className
    : ('object' === typeof className)
    ? className.toString().split(',').join(' ')
    : ''

  return (
    <div style={style.card} className={isDefault ? `__card-component __default` : `__card-component ${classname}`}>
      <div style={style.title}>
        {title ? <h3 className="__title">{title}</h3> : null}
        {icon ? <span className="__withIcon">{icon}</span> : null}
      </div>
      <div className="__card-body">
        {children
          ? children
          : body
            ? <div className="__card-body">
                <div className="__text-body">{body}</div>
              </div>
            : null
        }
      </div>
      <div>
        {footer ? footer : null}
      </div>
    </div>
  )
}

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
  ]),
  isDefault: PropTypes.bool,
  className: PropTypes.oneOf([ PropTypes.string, PropTypes.array ])
}
