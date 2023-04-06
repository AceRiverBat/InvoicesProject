import { createStore } from 'redux';
import { Provider } from 'react-redux';
import userReducer from './userReducer';
import Login from './Login';

const store = createStore(userReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Login />
      </div>
    </Provider>
  );
}

export default App;
