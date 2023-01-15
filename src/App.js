import ChatPage from "./components/ChatPage/ChatPage";
import MainPage from "./components/MainPage/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ChatBot" element={<ChatPage></ChatPage>}></Route>
        <Route path="/" element={<MainPage></MainPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
