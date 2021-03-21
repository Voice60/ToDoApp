import { connect, Provider } from 'react-redux';
import './App.scss';
import Tasks from './components/tasks';
import { addTask, editTask, toggleStatus } from './redux/listReducer';
import store from './redux/store';

function App({ addTask, tasks, toggleStatus, editTask }) {

  let tasksElements = tasks.map(
    (el) => (
      <Tasks key={el.id}
        el={el}
        toggleStatus={toggleStatus}
        editTask={editTask} />))

  return (
    <div className='heroWrap'>
      <header>
        <h1 className='mainTitle'>All Tasks</h1>
      </header>
      <div className="mainWrap">
        {tasksElements}
      </div>
      <button className='addNewTask' onClick={addTask}>+</button>
    </div>
  );
}

// desirable use selectors
let mstp = (state) => {
  return {
    tasks: state.list.items
  }
}

let mdtp = (dispatch) => {
  return {
    addTask: () => {
      dispatch(addTask())
    },
    toggleStatus: (id) => {
      dispatch(toggleStatus(id))
    },
    editTask: (id, task) => {
      dispatch(editTask(id, task))
    },
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


