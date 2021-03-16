import React from 'react'
import styles from './tasks.module.scss'

let Tasks = ({tasks, editTask, toggleStatus, addTask}) => {
  // debugger
  return tasks.map((el) => {
    return (
      <div className={styles.item}>
        <h2 className={styles.task}>{el.task}</h2>
        <input onChange={() => { debugger 
        toggleStatus(el.id) 
        debugger}} type="checkbox" value={el.status}></input>
      </div>
    )
  })
}

export default Tasks