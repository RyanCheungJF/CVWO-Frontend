import "./App.css";
import { useState } from "react";
import { TaskContext } from "./contexts/TaskContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllPage from "./pages/AllPage";
import CreatePage from "./pages/CreatePage";
import CompletedPage from "./pages/CompletedPage";
import IncompletePage from "./pages/IncompletePage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  const [tasks, setTasks] = useState([]);
  const [tags, setTags] = useState([]);
  const [inputText, setInputText] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputTags, setInputTags] = useState([]);
  const [userid, setUserid] = useState(-1);


  return (
    <Router>
      <div className="App">
        <TaskContext.Provider
          value={{
            userid,
            tasks,
            setTasks,
            tags,
            setTags,
            inputText,
            setInputText,
            inputDesc,
            setInputDesc,
            inputTags,
            setInputTags,
          }}
        >
          <Routes>
            <Route path="" element={<LandingPage />} />
            <Route path="login-page" element={<LoginPage setTasks={setTasks} setUserid={setUserid} />} />
            <Route path="signup-page" element={<SignupPage />} />
            <Route path="all-page" element={<AllPage />} />
            <Route path="incomplete-page" element={<IncompletePage />} />
            <Route path="completed-page" element={<CompletedPage />} />
            <Route path="create-page" element={<CreatePage />} />
          </Routes>
        </TaskContext.Provider>
      </div>
    </Router>
  );
}

export default App;
