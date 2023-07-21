import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  searchUserInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props

    const {searchInput} = this.state

    const filterSearchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="destination-search-bg-con">
        <div className="destination-search-con">
          <h1 className="destination-search-heading">Destination Search</h1>
          <div className="destination-search-img-con">
            <input
              className="destination-search-input"
              onChange={this.searchUserInput}
              value={searchInput}
              type="search"
              placeholder="Search"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="destination-search-item"
              alt="search icon"
            />
          </div>
          <ul className="destination-items-con">
            {filterSearchResults.map(eachItem => (
              <DestinationItem DestinationItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
