import React from 'react'

import Dropdown from '../../elements/Dropdown.js'

class HdgSrc extends React.Component {
  // TODO maybe is a good ideia to replace it to context
  constructor () {
    super()
    this.state = {
      value: 0
    }
  }

  componentDidMount () {
    this.setState({ value: this.props.weedingPatternId ? this.props.weedingPatternId : 0 })
  }

  change = (event) => {
    this.setState({value: event.target.value})
    this.props.onChange(event.target.value)
  }

  render () {
    const { data: { loading, error, allWeedingPattern } } = this.props

    if (loading) {
      return <p>Loading ...</p>
    }
    if (error) {
      return <p>{error.message}</p>
    }

    return (
      <Dropdown
        value={this.state.value}
        onChange={this.change}
      >
        <option key="0" value="0">...</option>
        {allWeedingPattern.map((weedingPattern, i) =>
          <option key={i} value={weedingPattern.id}>
            {weedingPattern.name}
          </option>
        )}
      </Dropdown>
    )
  }
}

export default HdgSrc
