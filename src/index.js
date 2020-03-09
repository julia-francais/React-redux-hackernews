import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./store";
// import { getReadableStories } from "./selectors/story";
// import { doArchiveStory } from "./actions/archive";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// function render() {
//   ReactDOM.render(
//     <App
//       stories={getReadableStories(store.getState())}
//       onArchive={id => store.dispatch(doArchiveStory(id))}
//     />,
//     document.getElementById("root")
//   );
// }

// store.subscribe(render);
// render();

serviceWorker.unregister();
