import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>heading</h1>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
