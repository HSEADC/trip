import './S_searchContent.scss'
import React from 'react'
import { getPostTeasers } from '../../search-vanilla-data.js'

import M_postTeaser from '../M_postTeaser/M_postTeaser.jsx'

export default class S_searchContent extends React.Component {
  constructor(props) {
    super(props)

    const { searchInputValue } = this.props

    this.state = {
      isSearchButtonDisabled: true,
      postTeasers: [],
      searchInputValue
    }
  }

  componentDidMount() {
    getPostTeasers().then((data) => {
      this.setState({
        postTeasers: data
      })
    })
  }

  renderPostTeasers = () => {
    const { postTeasers } = this.state
    let posts = []
    const searchInputValue = this.state.searchInputValue.toLowerCase()

    postTeasers.forEach((teaser) => {
      const nbspRegex = /[\u202F\u00A0]/gm
      // const punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/gm

      const title = teaser.title
        .replaceAll(nbspRegex, ' ')
        // .replaceAll(punctuationRegex, '')
        .toLowerCase()

      const description = teaser.description
        .replaceAll(nbspRegex, ' ')
        // .replaceAll(punctuationRegex, '')
        .toLowerCase()

      if (
        title.includes(searchInputValue) ||
        description.includes(searchInputValue)
      ) {
        posts.push(
          <M_postTeaser
            title={title}
            description={description}
            key={teaser.id}
            url={teaser.url}
            image={teaser.image}
            tags={teaser.tags}
          />
        )
      }
    })

    return posts
    // return posts
  }

  render() {
    return <div className="S_searchContent">{this.renderPostTeasers()}</div>
  }
}
