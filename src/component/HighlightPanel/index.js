import React from 'react'
import Card from '../../libs/CardComponent'
import utils from '../../utils'
import './index.stylesheet.css'

const HighlightPanel = () => {
  const [content, setContent] = React.useState({
    isLoaded: false,
    isError: '',
    data: []
  })

  const fetchData = async () => {
    const response = await fetch('https://www.mocky.io/v2/5dda42c932000094009a88e4')
    if (response.ok) {
      return response.json()
      .then(result => result)
      .catch(err => err)
    }
  }

  React.useEffect(() => {
    fetchData()
    .then(result => setContent(prevContent => {
      return { ...prevContent, isLoaded: true, data: result }
    }))
    .catch(err => setContent(prevContent => {
      return { ...prevContent, isLoaded: true, isError: err }
    }))
  }, [setContent])

  return (
    <div id="__ct-hlp" className="__w-hp">
      <div className="__w-hpt1">
        <h1 className="__hci">How Can I Help You ?</h1>
        <div className="__w-hpdsc">
          <p>
            Our work then targeted, best practices outcomes social innovation synergy.
            Venture philanthropy, revolutionary inclusive policymaker relief. User-centered program areas scale.
          </p>
        </div>
      </div>

      <div className="__row">
        {content.isLoaded ?
          content.data.map(c =>
            <div key={c.id} className="__column">
              <Card
                title={c.title}
                icon={utils.setIcon(c.icon, 22, '#cacaca')}
                body={c.description}
                isDefault
              />
            </div>
          ) :
          <div className="__loading">Loading...</div>
        }
      </div>
    </div>
  )
}

export default HighlightPanel
