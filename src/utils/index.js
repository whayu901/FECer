import React from 'react'

import CommentsIcon from '../icons/comments'
import BulhornIcon from '../icons/bulhorn'
import ChartLineIcon from '../icons/chartLine'
import CubesIcon from '../icons/cubes'
import PaintBrushIcon from '../icons/paintBrush'
import TasksIcon from '../icons/tasks'

export default {
  setIcon: (iconName, size, color) => {
    if ("string" !== typeof iconName)
      return <div>Prefix must be string</div>
    switch (iconName.toLowerCase()) {
      case 'comments':
        return <CommentsIcon size={size ? size : null} color={color ? color : null} />
      case 'bulhorn':
        return <BulhornIcon size={size ? size : null} color={color ? color : null} />
      case 'chartline':
        return <ChartLineIcon size={size ? size : null} color={color ? color : null} />
      case 'cubes':
        return <CubesIcon size={size ? size : null} color={color ? color : null} />
      case 'paintbrush':
        return <PaintBrushIcon size={size ? size : null} color={color ? color : null} />
      case 'tasks':
        return <TasksIcon size={size ? size : null} color={color ? color : null} />
      default:
        return <CommentsIcon size={size ? size : null} color={color ? color : null} />
    }
  }
}
