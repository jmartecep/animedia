import react, { Component } from 'react'

class YoutubeVideo extends Component {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    const { youtubeTrailerId, ...attributes } = this.props //destructure
    return (
      <iframe {...attributes}
        src={`https://www.youtube.com/embed/${youtubeTrailerId}`}>
      </iframe>
    )
  }
}

export default YoutubeVideo