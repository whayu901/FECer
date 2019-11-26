import React from 'react'

import NotificationPanel from './NotificationPanel'
import HeroShot from './HeroShot'
import HighlightPanel from './HighlightPanel'
import Footer from './Footer'
import NewsLetter from './NewslatterPanel'

const AppMain = () => {
  const [visible, setVisible] = React.useState(true)
  const handleNotification = () => setVisible(false)
  return (
    <div className="__wrapper">
      <NotificationPanel
        visibility={visible}
        clicked={handleNotification} />
      <HeroShot
        eventHandling={visible} />
      <HighlightPanel />
      <Footer />
      <NewsLetter />
    </div>
  )
}

export default AppMain
