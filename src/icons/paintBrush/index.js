import React from 'react'
import PropTypes from 'prop-types'

const PaintBrushIcon = ({ size, color }) =>
  <svg width={size ? size : 32} height={size ? size : 32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#paintBrush)">
      <path
        d="M10.4388 19.3337C7.93125 19.495 5.65563 20.45 4.36438 23.8525C4.2175 24.2406 3.86438 24.4762 3.4525 24.4762C2.75813 24.4762 0.61125 22.7469 -0.00062561 22.3294C-6.10191e-07 27.4762 2.37062 32 8 32C12.7413 32 16 29.2644 16 24.4881C16 24.2938 15.9594 24.1081 15.9394 23.9175L10.4388 19.3337ZM28.6181 0C27.6706 0 26.7825 0.419375 26.105 1.02813C13.3294 12.4406 12 12.7087 12 16.0681C12 16.9244 12.2031 17.7406 12.5456 18.4869L16.5344 21.8106C16.985 21.9231 17.4494 22 17.9338 22C21.8156 22 24.0656 19.1581 31.1313 5.97125C31.5925 5.07438 32 4.10563 32 3.09687C32 1.29 30.375 0 28.6181 0Z"
        fill={color ? color : "black"} />
    </g>
    <defs>
      <clipPath id="paintBrush">
        <rect width="32" height="32" fill="white"/>
      </clipPath>
    </defs>
  </svg>


export default PaintBrushIcon

PaintBrushIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
}
