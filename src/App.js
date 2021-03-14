import { connect, Provider } from 'react-redux';
import './App.scss';
import { addListItem, removeListItem } from './redux/listReducer';
import store from './redux/store';

function App({ list, addListItem, removeListItem }) {
  let tableElements = list.map((el) => {

    return (
      <tr>
        <td>{el.id}</td>
        <td>{el.name}</td>
        <td>
          <button onClick={() => removeListItem(el.id)}></button>
        </td>
      </tr>
    )
  })

  return (
      <div className='heroWrap'>
        <header>
          <h1 align='center' className='mainTitle'>My first try to do something</h1>
        </header>
        <div className="mainWrap">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Product name</th>
                <th>Remove</th>
              </tr>
            </thead>
            {tableElements}
            <tbody>
            </tbody>
          </table>
        </div>
        <button onClick={addListItem}></button>
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
    addListItem: () => {
      dispatch(addListItem())
    },
    removeListItem: (id) => {
      dispatch(removeListItem(id))
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


