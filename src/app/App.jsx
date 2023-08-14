import { Provider } from "react-redux";
import store from "./store";
import Router from "../routes";
import useFaviconSet from "../hooks/useFaviconSet";

const App = () => {
  useFaviconSet();
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
