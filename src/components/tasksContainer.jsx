import React from 'react'
import { connect } from 'react-redux'
import {addTask, toggleStatus, editTask} from '../redux/listReducer'
import Tasks from './tasks'

let TasksContainer = ({tasks}) => {
  return <Tasks addTask={addTask} toggleStatus={toggleStatus} editTask={editTask} tasks={tasks} />
}

const mstp = (state) => ({
  tasks: state.list.items
})

const mdtp = () => ({
  addTask,
  toggleStatus,
  editTask,
})

export default connect(mstp, mdtp)(TasksContainer)