import React from 'react'
import PropTypes from 'prop-types'

const ChartLineIcon = ({ size, color }) =>
  <svg width={size ? size : 32} height={size ? size : 32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M31 24H4V5C4 4.4475 3.5525 4 3 4H1C0.4475 4 0 4.4475 0 5V26C0 27.1044 0.895625 28 2 28H31C31.5525 28 32 27.5525 32 27V25C32 24.4475 31.5525 24 31 24ZM29 6H21.6213C20.285 6 19.6156 7.61563 20.5606 8.56063L22.5856 10.5856L18 15.1719L13.4144 10.5863C12.6331 9.805 11.3669 9.805 10.5863 10.5863L6.29313 14.8794C5.9025 15.27 5.9025 15.9031 6.29313 16.2938L7.70687 17.7075C8.0975 18.0981 8.73063 18.0981 9.12125 17.7075L12 14.8281L16.5856 19.4137C17.3669 20.195 18.6331 20.195 19.4137 19.4137L25.4137 13.4137L27.4387 15.4388C28.3837 16.3838 29.9994 15.7144 29.9994 14.3781V7C30 6.4475 29.5525 6 29 6Z"
      fill={color ? color : 'black'}/>
  </svg>

export default ChartLineIcon

ChartLineIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
}
