import { Route, Routes } from "react-router-dom";
import Events from "./components/Events";
// import "./App.css"; 
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;
