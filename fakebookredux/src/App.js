import logo from "./logo.svg";
import "./App.css";
import HomePage from "./homePage";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/rootReducer";

function App() {
  const store = createStore(rootReducer);
  return (
    <div className="App">
      <Provider store={store}>
        <HomePage />
      </Provider>
    </div>
  );
}

export default App;
