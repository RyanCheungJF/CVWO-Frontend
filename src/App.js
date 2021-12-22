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

const MOCK_DATA = [
  {
    name: "Cook CurryPuff",
    desc: "Stuffed uwu",
    completed: false,
    tags: ["fish"],
  },
  {
    name: "Become a Gopinath",
    desc: "Gotta marry the right one!",
    completed: false,
    tags: ["beef"],
  },
  {
    name: "completed task",
    desc: "a test",
    completed: true,
    tags: ["chicken curry", "fish"],
  },
];

function App() {
  const [tasks, setTasks] = useState(MOCK_DATA);
  const [tags, setTags] = useState(["fish", "beef", "chicken curry"]);
  const [inputText, setInputText] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputTags, setInputTags] = useState([]);

  return (
    <Router>
      <div className="App">
        <TaskContext.Provider
          value={{
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
            <Route path="login-page" element={<LoginPage />} />
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
