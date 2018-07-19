import React from 'react'

import ComponentMapGroup from '../../blocks/ComponentMapGroup'

class PanelRight extends React.Component {
  constructor () {
    super()
    this.state = {
      taskName: ''
    }
  }

  render () {
    const { Container, Edit, Task, ButtonSave } = ComponentMapGroup
    const { data: { loading, error, allTasks } } = this.props

    if (loading) {
      return <p>Loading ...</p>
    }
    if (error) {
      return <p>{error.message}</p>
    }

    // TODO placeholder from i18n
    return (
      <React.Fragment>
        <ComponentMapGroup>

          <Container maxWidth='300px' >
            <Edit
              width='167px'
              grow='1'
              placeholder='New task name'
              value={this.state.taskName}
              onChange={(e) => this.setState({ taskName: e.target.value })}
            />
            <ButtonSave value={this.state.taskName} />
          </Container>

          {allTasks.map((task, i) =>
            <Task key={i} task={task} />
          )}

        </ComponentMapGroup>
      </React.Fragment>
    )
  }
}

export default PanelRight
