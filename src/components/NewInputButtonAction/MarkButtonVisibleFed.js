// eslint-disable-next-line
import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import BedButtonVisibleAction from './BedButtonVisibleAction.js'
// import { polylinesByType } from '../MapGroup/MapGroupFed.js'

const MarkButtonVisible = (props) => {
  return (
    <BedButtonVisibleAction
      {...props}
      label={ props.visible ? '<' : '>' }
    />
  )
}

const markMutation = gql`
  mutation visibleMarker ($id: Int!) {
    visibleMarker ( id: $id )
  }
`

export default graphql(markMutation, {
  options: {
    refetchQueries: [ 'allMarkers' ]
  }
})(MarkButtonVisible)
