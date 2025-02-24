import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/profile/:username" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
