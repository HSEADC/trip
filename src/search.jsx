import * as ReactDOM from 'react-dom/client'
// import { createRoot } from 'react-dom/client'

// import { createRoot } from 'react-dom/client'
import './search.css'
import React from 'react'
import S_searchContent from './components/S_searchContent/S_searchContent.jsx'

function getSearchRequest() {
  const url = new URL(window.location.href)
  const searchParams = new URLSearchParams(url.search)

  if (searchParams.has('request')) {
    return searchParams.get('request')
  }
}

const root = ReactDOM.createRoot(
  document.querySelector('.W_contentReactModule')
)
root.render(<S_searchContent searchInputValue={getSearchRequest()} />)
