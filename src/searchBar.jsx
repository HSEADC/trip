// import * as ReactDOM from 'react-dom/client' -- чем отличаются?

import { createRoot } from 'react-dom/client'
import './searchBar.scss'
import React from 'react'
import O_searchBar from './components/O_searchBar/O_searchBar.jsx'

function getSearchRequest() {
  const url = new URL(window.location.href)
  const searchParams = new URLSearchParams(url.search)

  if (searchParams.has('request')) {
    return searchParams.get('request')
  } else {
    return ''
  }
}

const root = createRoot(document.querySelector('.O_header .W_search'))
root.render(<O_searchBar searchInputValue={getSearchRequest()} />)
