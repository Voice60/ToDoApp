import React, { useState } from 'react'
import styles from './tasks.module.scss'
import cn from 'classnames'

let Tasks = ({ el, editTask, toggleStatus }) => {

  let [editMode, setEditMode] = useState(false)
  let [taskNameValue, setTaskNameValue] = useState(el.task)

  let activateEditMode = () => {
    if (el.status) { setEditMode(true) }
  }

  let deactivateEditMode = () => {
    setEditMode(false)
    editTask(el.id, taskNameValue.trim())
    setTaskNameValue(el.task)
  }

  let onTaskChange = (e) => {
    setTaskNameValue(e.currentTarget.value)
  }

  let classNameP = cn(styles.task, {
    [styles.statusTrue]: !el.status,
    [styles.emptyTask]: !el.task,
  })

  let classNameItem = cn(styles.item, {
    [styles.itemEditModeOn]: editMode,
  })


  return (
    <div className={classNameItem}>
      {editMode
        ? <textarea spellCheck="false"
          placeholder='your task'
          autoFocus
          onBlur={deactivateEditMode}
          onChange={onTaskChange}
          value={taskNameValue}
          className={styles.textareaTask}></textarea>
        : <p onClick={activateEditMode}
          className={classNameP}>{el.task
            ? el.task
            : "your task"}</p>}
      <label className={styles.label}>
        <input onChange={() => {
          toggleStatus(el.id)
        }}
          type="checkbox"
          value={el.status}
          className={styles.checkbox}></input>
        <span className={styles.customСheckbox}></span>
      </label>
    </div>
  )
}

export default Tasks