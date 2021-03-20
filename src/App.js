import { connect, Provider } from 'react-redux';
import './App.scss';
import TasksContainer from './components/tasksContainer';
import { addTask } from './redux/listReducer';
import store from './redux/store';

function App({ addTask }) {

  return (
    <div className='heroWrap'>
      <header>
        <h1 className='mainTitle'>All Tasks</h1>
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


