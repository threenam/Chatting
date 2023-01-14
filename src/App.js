import MainPage from "./components/mainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
