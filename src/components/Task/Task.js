import React from 'react'
// import { FormattedMessage } from 'react-intl'

import { Edit } from '../../elements'
import PolylineButton from '../../blocks/PolylineButton'
import ButtonDeleteTask from '../TaskButtonAction/TaskButtonDeleteFed.js'
import ButtonVisible from '../TaskButtonAction/TaskButtonVisibleFed.js'
import ButtonEdit from '../TaskButtonAction/TaskButtonEditFed.js'
import Polyline from '../Polyline'
import {
  ButtonInverse,
  ButtonDelete,
  ButtonUp,
  ButtonDown
} from '../../components/TasksPolylinesButtonAction/'

class Task extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      infoDisplay: 'none',
      editDisplay: false,
      taskName: this.props.task.name
    }
    this.showEdit = this.showEdit.bind(this)
  }

  showEdit () {
    this.setState({ editDisplay: !this.state.editDisplay })
  }

  // TODO I'm not sure if this is the best way,propably no
  nameContainer () {
    const { task } = this.props
    const { Button, Label } = PolylineButton
    return (
      <Button grow='1'>
        <Label width='167px' grow='1' >{task.name}</Label>
      </Button>
    )
  }

  editContainer () {
    const { task } = this.props
    const { Container } = PolylineButton
    return (
      <Container maxWidth='300px' >
        <Edit
          width='119px'
          grow='1'
          placeholder='New task name'
          value={this.state.taskName}
          onChange={(e) => this.setState({ taskName: e.target.value })}
        />
        <ButtonEdit taskId={task.id} name={this.state.taskName} showEdit={this.showEdit} />
      </Container>
    )
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
          { this.state.editDisplay ? this.editContainer() : this.nameContainer() }

          <Button width='24px' marginLeft='1px' onClick={() => selectTask(task.id)}>
            <Label>{ taskSelected === task.id ? '#' : '=' }</Label>
          </Button>

          <ButtonDeleteTask value={task.id} />

          <Button width='24px' marginLeft='1px' onClick={() => this.setState({
            infoDisplay: infoDisplay === 'none' ? 'flex' : 'none'
          })}>
            <Label>{ infoDisplay === 'none' ? 'v' : '^' }</Label>
          </Button>

          <Button width='24px' marginLeft='1px' onClick={() => this.showEdit()}>
            <Label>/</Label>
          </Button>

          <ButtonVisible value={task.id} visible={task.visible} />

        </Container>
        <Container marginTop='1px' backgroundColor={'#AA8844' /* TODO get from theme */ }
          flexDirection='column'
          display={this.state.infoDisplay}
        >
          {
            tasksPolylinesByTask.map((taskPolyline, j) =>

              // TODO replace for a component
              <Container key={j} backgroundColor={'#886622' /* TODO get from theme */ } >
                <Button grow='1'>
                  <Label>{taskPolyline.polyline.name}</Label>
                </Button>

                <ButtonInverse taskId={task.id} taskPolylineId={taskPolyline.id} />
                <ButtonDelete taskId={task.id} taskPolylineId={taskPolyline.id} />
                <ButtonUp taskId={task.id} taskPolylineId={taskPolyline.id} />
                <ButtonDown taskId={task.id} taskPolylineId={taskPolyline.id} />

                <Polyline inverse={taskPolyline.Inverse} {...taskPolyline.polyline} visible={task.visible} />
              </Container>
            )}
        </Container>

      </PolylineButton>
    )
  }
}

export default Task
