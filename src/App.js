import { connect, Provider } from 'react-redux';
import './App.scss';
import TasksContainer from './components/tasksContainer';
import { addTask, removeTask } from './redux/listReducer';
import store from './redux/store';

function App({ list, addTask, removeTask }) {
  let tableElements = list.map((el) => {

    return (
      <tr>
        <td>{el.id}</td>
        <td>{el.name}</td>
        <td onClick={() => removeTask(el.id)}>
          <p></p>
            {/* <button ></button> */}

        </td>
      </tr>
    )
  })

  return (
      <div className='heroWrap'>
        <header>
          <h1 align='center' className='mainTitle'>All Tasks</h1>
        </header>
        <div className="mainWrap">
          <TasksContainer />
        </div>
        <button className='addNewTask' onClick={addTask}>+</button>
      </div>
  );
}

// desirable use selectors
let mstp = (state) => {
  return {
    list: state.list.items
  }
}
let mdtp = (dispatch) => {
  return {
    addTask: () => {
      dispatch(addTask())
    },
    removeTask: (id) => {
      dispatch(removeTask(id))
    }
  }
}

const AppConnect = connect(mstp, mdtp)(App);

const MainApp = () => {
  return (
    <Provider store={store}>
      <AppConnect />
    </Provider>
  )
}
export default MainApp;


