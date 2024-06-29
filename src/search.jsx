import React from 'react';
import { createRoot } from 'react-dom/client';
// import './search.css';
import { getPostTeasers } from './searchData.js';

class M_SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      query: '',
      results: [],
    };
  }

  componentDidMount() {
    const params = new URLSearchParams(window.location.search);
    const requestParam = params.get('request');
    if (requestParam) {
      this.setState({ query: decodeURIComponent(requestParam) }, () => {
        this.performSearch(this.state.query);
      });
    }
  }

  handleInput = (event) => {
    this.setState({ query: event.target.value });
  };

  handleKeyDown = (event) => {
    if (event.key === 'Enter' && this.state.query.length >= 3) {
      this.setSearchRequest(this.state.query);
    }
  };

  setSearchRequest = (requestText) => {
    const url = `${window.location.origin}/search.html`;
    window.location.href = `${url}?request=${encodeURIComponent(requestText)}`;
  };

  performSearch = async (query) => {
    try {
      const data = await getPostTeasers();
      const filteredResults = data.filter((post) => {
        const titleMatches = post.title.toLowerCase().includes(query.toLowerCase());
        const descriptionMatches = post.description.toLowerCase().includes(query.toLowerCase());
        return titleMatches || descriptionMatches;
      });
      this.setState({ results: filteredResults });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  renderResults = () => {
    return this.state.results.map((post) => (
      <div key={post.id} className="post-teaser">
        <a href={post.url} target="_blank" rel="noopener noreferrer">
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </a>
      </div>
    ));
  };

  render() {
    return (
      <div>
        <div className="A_Search">
          <div className="Q_Icons-Search"></div>
          <input
            placeholder="поиск"
            onInput={this.handleInput}
            onKeyDown={this.handleKeyDown}
            value={this.state.query}
          />
        </div>
        <div id="search-results">{this.renderResults()}</div>
      </div>
    );
  }
}

export default M_SearchBar;

// Рендеринг компонента на странице
const container = document.getElementById('A_Search');
const root = createRoot(container);
root.render(<M_SearchBar />);