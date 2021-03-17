//Consts

const ADD_TASK = 'ADD_TASK'
const REMOVE_TASK = 'REMOVE_TASK'
const TOGGLE_STATUS = 'TOGGLE_STATUS'
const EDIT_TASK = 'EDIT_TASK'


let InitialState = {
  items: [{ task: 'Create Web Application', status: true, id: 0 }],
  currentId: 1
}

//Reducer
const listReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      state.currentId++
      return {
        ...state,
        items: [...state.items, { task: '', status: true, id: state.currentId }]
      }}
    case EDIT_TASK: {
      let newList = [...state.items]
      for (let i = 0; newList.length > i; i++) {
        if (newList[i].id === action.id) {
          newList[i].task = action.task
        }
      }
      return {
        ...state,
        items: newList
      }}
    case TOGGLE_STATUS: {
      let newList = [...state.items]
      for (let i = 0; newList.length > i; i++) {
        if (newList[i].id === action.id) {
          newList[i].status = !newList[i].status
        }
      }
      return {
        ...state,
        items: newList
      }}
    case REMOVE_TASK: {
      let newList = [...state.items]
      for (let i = 0; newList.length > i; i++) {
        if (newList[i].id === action.id) {
          newList.splice(i, 1)
        }
        return {
          ...state,
          items: [...newList]
        }
      }}
    default: return state
  }
}

//Actions
export const addTask = () => ({ type: ADD_TASK })
export const removeTask = (id) => ({ type: REMOVE_TASK, id })
export const toggleStatus = (id) => ({ type: TOGGLE_STATUS, id })
export const editTask = (id, task) => ({ type: EDIT_TASK, id, task})


export default listReducer