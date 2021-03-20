import React, { useState } from 'react'
import styles from './tasks.module.scss'
import cn from 'classnames'

let TaskName = ({ editTask, el, click }) => {
  let [editMode, setEditMode] = useState(click)
  let [taskNameValue, setTaskNameValue] = useState(el.task)

  let activateEditMode = () => {
    if (el.status) { setEditMode(true) }
  }

  let deactivateEditMode = () => {
    setEditMode(false)
    editTask(el.id, taskNameValue)
  }

  let onTaskChange = (e) => {
    setTaskNameValue(e.currentTarget.value)
  }

  let classNameP = cn(styles.task, {
    [styles.statusTrue]: !el.status
  })
  return (
    <>
      {editMode
        ? <textarea spellCheck="false"
          placeholder='your task'
          autoFocus
          onBlur={deactivateEditMode}
          onChange={onTaskChange}
          value={taskNameValue}
          className={styles.textareaTask}></textarea>
        : <p onClick={activateEditMode}
          className={classNameP}>{el.task}</p>}
    </>
  )
}

export default TaskName