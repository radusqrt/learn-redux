import React from "react";
import "./App.css";
// The glue for Redux
import { Provider } from "react-redux";

import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

// store provides the whole state tree for my app
import store from "./store";

function App() {
  return (
    // The <Provider /> makes the Redux store available to any nested
    // components that have been wrapped in the connect() function.
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
