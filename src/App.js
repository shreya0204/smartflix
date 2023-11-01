import Body from "./pages/Body/Body";
import { Provider } from "react-redux";
import appStore from "./services/redux/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
