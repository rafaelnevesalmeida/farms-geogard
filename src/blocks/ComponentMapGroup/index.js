import styled from 'styled-components'

import Task from '../../components/Task'
import TaskButtonSave from '../../components/TaskButtonAction/TaskButtonSaveFed.js'
import { Header, Container, Edit } from '../../elements'

const ComponentMapGroup = styled.div`
  width: ${props => props.width || '100%'};
  // max-width: 300px;
  margin-top: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  // align-items: flex-start;
`

ComponentMapGroup.Header = Header
ComponentMapGroup.Container = Container
ComponentMapGroup.Edit = Edit
ComponentMapGroup.Task = Task
ComponentMapGroup.ButtonSave = TaskButtonSave

export default ComponentMapGroup
