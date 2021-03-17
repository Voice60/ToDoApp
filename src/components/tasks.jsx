import React from 'react'
import TaskName from './taskName'
import styles from './tasks.module.scss'

let Tasks = ({ tasks, editTask, toggleStatus }) => {

  return tasks.map((el) => {
    return (
      <div className={styles.item}>
        <TaskName key={el.id} editTask={editTask} el={el} />
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
  })
}

export default Tasks