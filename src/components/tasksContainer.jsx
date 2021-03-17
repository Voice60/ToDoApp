import React from 'react'
import { connect } from 'react-redux'
import { addTask, toggleStatus, editTask } from '../redux/listReducer'
import Tasks from './tasks'

let TasksContainer = ({ tasks, toggleStatus, editTask }) => {
  return <Tasks toggleStatus={toggleStatus} editTask={editTask} tasks={tasks} />
}

const mstp = (state) => ({
  tasks: state.list.items
})

const mdtp = (dispatch) => ({
  toggleStatus: (id) => {
    dispatch(toggleStatus(id))
  },
  editTask: (id, task) => {
    dispatch(editTask(id, task))
  },
})

export default connect(mstp, mdtp)(TasksContainer)