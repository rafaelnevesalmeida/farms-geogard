import React from 'react'
// import { FormattedMessage } from 'react-intl'

import PolylineButton from '../../blocks/PolylineButton'
import ButtonDeleteTask from '../TaskButtonAction/TaskButtonDeleteFed.js'
import ButtonVisible from '../TaskButtonAction/TaskButtonVisibleFed.js'
import Polyline from '../Polyline'
import {
  ButtonDelete,
  ButtonUp,
  ButtonDown
} from '../../components/TasksPolylinesButtonAction/'

class Task extends React.Component {
  constructor () {
    super()
    this.state = {
      infoDisplay: 'none'
    }
  }

  render () {
    const { task, selectTask, taskSelected,
      data: { loading, error, tasksPolylinesByTask }
    } = this.props
    const { infoDisplay } = this.state
    const { Container, Button, Label } = PolylineButton

    if (loading) {
      return <p>Loading ...</p>
    }
    if (error) {
      return <p>{error.message}</p>
    }

    return ( // TODO change the visual props to modifier
      <PolylineButton>
        <Container>
          <Button grow='1'>
            <Label>{task.name} </Label>
          </Button>

          <Button width='24px' marginLeft='1px' onClick={() => selectTask(task.id)}>
            <Label>{ taskSelected === task.id ? '#' : '=' }</Label>
          </Button>

          <ButtonDeleteTask value={task.id} />

          <Button width='24px' marginLeft='1px' onClick={() => this.setState({
            infoDisplay: infoDisplay === 'none' ? 'flex' : 'none'
          })}>
            <Label>{ infoDisplay === 'none' ? 'v' : '^' }</Label>
          </Button>

          <ButtonVisible value={task.id} visible={task.visible} />

        </Container>

        <Container backgroundColor={'#AA8844' /* TODO get from theme */ }
          flexDirection='column'
          display={this.state.infoDisplay}
        >
          {
            tasksPolylinesByTask.map((taskPolyline, j) =>

              // TODO replace for a component
              <Container key={j}>
                <Button grow='1'>
                  <Label>{taskPolyline.polyline.name}</Label>
                </Button>

                { /* <ButtonInverse taskId={task.id} taskPolylineId={taskPolyline.id} /> */ }
                <ButtonDelete taskId={task.id} taskPolylineId={taskPolyline.id} />
                <ButtonUp taskId={task.id} taskPolylineId={taskPolyline.id} />
                <ButtonDown taskId={task.id} taskPolylineId={taskPolyline.id} />

                <Polyline {...taskPolyline.polyline} visible={task.visible} />
              </Container>
            )}
        </Container>

      </PolylineButton>
    )
  }
}

export default Task
