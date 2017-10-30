import React from 'react';
import { connect } from 'react-redux'
import { filterTracks } from '../actions'

class FilterForm extends React.Component {

  state = {
    filterTerm: ""
  }

  // handleClick = (event) => {
  //   event.preventDefault()
  //   this.props.filterTracks(this.state.filterTerm)
  // }

  handleChange = (event) => {
    this.setState({
      filterTerm: event.target.value
    }, () => this.props.filterTracks(this.state.filterTerm))
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} value={this.state.filterTerm}></input>
        <button onClick={this.handleClick}>FILTER</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    filterTracks: (filterTerm) => {
      dispatch(filterTracks(filterTerm))
    }
  }
}

export default connect(null, mapDispatchToProps)(FilterForm)
