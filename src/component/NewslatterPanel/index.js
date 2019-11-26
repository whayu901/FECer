import React from 'react'
import Card from '../../libs/CardComponent'
import './newsletter.stylesheet.css'

const NewsLetter = () => {
  const [input, setInput] = React.useState('')

  const handleOnChange = e => setInput(e.target.value)

  const handleFormSubmit = e => {
    e.preventDefault()
    console.log(input)
  }

  const closeNewsletterPanel = () => {
    console.log('✅ Click on close button...')
  }
  return (
    <React.Fragment>
      <div className="__nwl-w">
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
