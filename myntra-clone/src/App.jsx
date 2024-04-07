import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./Store/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
