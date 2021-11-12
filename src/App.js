import GlobalStyles from "./styles/globalStyle";
import { Routes } from "./Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyles />
      <Routes />
    </>
  );
}

export default App;
