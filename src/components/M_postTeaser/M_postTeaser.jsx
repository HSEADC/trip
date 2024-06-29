import './M_postTeaser.scss'
import React from 'react'

import A_text from '../A_text/A_text.jsx'
import A_image from '../A_image/A_image.jsx'

export default class M_postTeaser extends React.Component {
  render() {
    const { title, description, url, image, tags } = this.props

    const tagElements = []
    tags.forEach((tag, i) => {
      tagElements.push(<A_text type="tag" text={tag} key={i} />)
    })

    return (
      <a className="M_postTeaser" href={url}>
        <A_image type="postTeaser" src={image} />
        <A_text type="h3" text={title} />
        <A_text type="p" text={description} />
        <div className="C_postTeaserTags">{tagElements}</div>
      </a> //украшение вывода
    )
  }
}
