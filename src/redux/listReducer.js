//Consts

const ADD_LIST_ITEM = 'ADD_LIST_ITEM'
const REMOVE_LIST_ITEM = 'REMOVE_LIST_ITEM'


let InitialState = {
  items: [{id: 1, name: 'react'}],
  currentId: 2

}

//Reducer
const listReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ADD_LIST_ITEM:
      return {
        ...state,
        items: [...state.items, {id: state.currentId, name: ''}],
        currentId: state.currentId+=1
      }
    case REMOVE_LIST_ITEM:
      let newList = [...state.items]
      console.log(newList)
      for (let i = 0; newList.length > i; i++) {
        console.log(newList[i].id === action.id, newList[i].id, action.id)
        if (newList[i].id === action.id) {
          newList.splice(i, 1)
        }
      } console.log({
        ...state,
        items: [...newList]
      })
      return {
        ...state,
        items: [...newList]
      }
    default: return state
  }
}

//Actions
export const addListItem = () => ({type: ADD_LIST_ITEM})
export const removeListItem = (id) => ({type: REMOVE_LIST_ITEM, id})


export default listReducer