import './O_searchBar.scss'
import React from 'react'
import { getPostTeasers } from '../../search-vanilla-data.js'

// import M_searchForm from '../M_searchForm/M_searchForm.jsx'
import M_formSearch from '../M_formSearch/M_formSearch.jsx'
import M_postSuggestion from '../M_postSuggestion/M_postSuggestion.jsx'

export default class O_searchBar extends React.Component {
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

  handleSearchInput = (searchInputValue) => {
    let isSearchButtonDisabled = true

    if (searchInputValue.length >= 3) {
      isSearchButtonDisabled = false
    }

    this.setState({
      isSearchButtonDisabled,
      searchInputValue
    })
  }

  handleSearchSubmit = () => {
    const { searchInputValue } = this.state

    if (searchInputValue.length >= 3) {
      console.log('Submit')

      const separator = ':8080/'
      //const separator = '.adc.ac/'

      const url = window.location.href.split(separator)[0]

      // Устанавливаем новый URL с добавлением параметра request.
      window.location.href =
        url + separator + 'search.html?request=' + searchInputValue
    }
  }

  renderPostSuggestions = () => {
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
          <M_postSuggestion
            title={title}
            description={description}
            key={teaser.id}
            url={teaser.url}
          />
        )
      }
    })

    return <div className="C_postSuggestions">{posts}</div>
    // return posts
  }

  render() {
    const { isSearchButtonDisabled, searchInputValue } = this.state

    return (
      <div className="O_searchBar">
        <M_formSearch
          isSearchButtonDisabled={isSearchButtonDisabled}
          searchInputValue={searchInputValue}
          handleSearchInput={this.handleSearchInput}
          handleSearchSubmit={this.handleSearchSubmit}
        />
        {searchInputValue.length >= 3 &&
          !isSearchButtonDisabled &&
          this.renderPostSuggestions()}
      </div>
    )
  }
}
