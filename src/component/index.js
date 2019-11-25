import React from 'react'

import NotificationPanel from './NotificationPanel'
import HeroShot from './HeroShot'
import HighlightPanel from './HighlightPanel'
import Footer from './Footer'
import NewsLetter from './NewslatterPanel'

const AppMain = () =>
  <div className="__wrapper">
    <NotificationPanel />
    <HeroShot />
    <HighlightPanel />
    <Footer />
    <NewsLetter />
  </div>

export default AppMain
