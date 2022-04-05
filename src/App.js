import React from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import ReduxToastr from "react-redux-toastr";
import { BrowserRouter} from "react-router-dom";
import DisplayContent from "./pages/DisplayContent"
import "./assets/scss/main.scss";
import "./App.scss";

function App() {
  return (
   <BrowserRouter>
      <Provider store={store}>
      <React.Fragment>
        <ReduxToastr
          position="top center"
          transitionIn="bounceIn"
          transitionOut="bounceOut"
          progressBar
          preventDuplicates={false}
        />
        <DisplayContent/>
      </React.Fragment>
    </Provider>
   </BrowserRouter>
  );
}

export default App;
