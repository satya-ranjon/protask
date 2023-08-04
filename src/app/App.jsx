import { Provider } from "react-redux";
import AppWrapper from "../layouts/AppWrapper";
import Tasks from "../pages/task/Tasks";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <AppWrapper>
        <Tasks />
      </AppWrapper>
    </Provider>
  );
};

export default App;
