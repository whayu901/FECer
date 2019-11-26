import React from 'react'
import Card from '../../libs/CardComponent'
import './newsletter.stylesheet.css'

const NewsLetter = () => {
  const storage = window.localStorage
  const [input, setInput] = React.useState('')
  const [hide, setHide] = React.useState(true)
  const node = React.useRef()

  React.useEffect(() => {
    window.addEventListener('scroll', () => {

      const yScroll = window.scrollY
      const panelConfig = JSON.parse(storage.getItem('panel'))
      const now = new Date()
      const minutes = now.setMinutes(now.getMinutes())

      if (!panelConfig) {
        if (yScroll > 896) setHide(h => h = false)
      } else if (panelConfig && (minutes > panelConfig.expired)) {
        storage.clear()
        if (yScroll > 896) setHide(h => h = false)
      } else if (panelConfig && panelConfig.subscribe) {
        setHide(h => h = true)
      }
    })
  }, [setHide, storage])

  const handleOnChange = e => setInput(e.target.value)

  const handleFormSubmit = e => {
    e.preventDefault()
    console.log(input)
  }

  const closeNewsletterPanel = () => {
    console.group('🚀  Execution Script...')

    const now = new Date()
    const expired = now.setMinutes(now.getMinutes() + 10)

    const config = {
      closed: hide,
      subscribe: false,
      expired
    }

    setHide(true)
    console.log('Close panel... ✅')

    storage.setItem('panel', JSON.stringify(config))
    console.log('Set panel setting in local storage... ✅')
    console.groupEnd()
  }

  return (
    <React.Fragment>
      <div
        id="__nwl-wID"
        className={hide ? `__nwl-w` : `__nwl-w __show`}
        ref={node}>
        <Card>
          <div className="__nwl-title">
            <div
              className="__close-this-panel"
              onClick={closeNewsletterPanel}>
              x
            </div>
            <h3>Get latest updates in web technologies </h3>
          </div>
          <div className="__nwl-body">
            <p className="__nwl-body-text">
              I write articles related to web technologies, such as design trends, development
              tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
              them all.
            </p>
            <form onSubmit={handleFormSubmit}>
              <div className="__input-group __inline-input">
                <div className="__input-wrapper">
                  <input
                    type="email"
                    className="__input"
                    value={input}
                    onChange={handleOnChange}
                    required />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <button
                    className="__btn __btn-inline __bg-orange">
                    Count me in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </React.Fragment>
  )
}

export default NewsLetter
