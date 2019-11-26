import React from 'react'
import Card from '../../libs/CardComponent'
import './newsletter.stylesheet.css'

const NewsLetter = () => {
  return (
    <React.Fragment>
      <div className="__nwl-w">
        <Card>
          <div className="__nwl-title">
            <div className="__close-this-panel">x</div>
            <h3>Get latest updates in web technologies </h3>
          </div>
          <div className="__nwl-body">
            <p className="__nwl-body-text">
              I write articles related to web technologies, such as design trends, development
              tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get
              them all.
            </p>
            <form>
              <div className="__group-input __inline-input">
                <div>
                  <input type="text" readOnly />
                </div>
                <div>Count me in</div>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </React.Fragment>
  )
}

export default NewsLetter
