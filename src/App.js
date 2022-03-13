import React from "react";
import Home from "./pages/Home";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";
import "./assets/scss/main.scss";
import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <ReduxToastr
          position="top center"
          transitionIn="bounceIn"
          transitionOut="bounceOut"
          progressBar
          preventDuplicates={false}
        />
        <Home />
      </React.Fragment>
    </Provider>
  );
}

export default App;
