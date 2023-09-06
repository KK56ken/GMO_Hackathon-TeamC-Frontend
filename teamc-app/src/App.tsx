import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import UserListPage from "./pages/UserListPage";
import UserProfilePage from "./pages/UserProfilePage";
import TaskDetailPage from "./pages/TaskDetailPage";
import TaskListPage from "./pages/TaskListPage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/users" Component={UserListPage} />
          <Route path="/users/:id" Component={UserProfilePage} />
          <Route path="/tasks" Component={TaskListPage} />
          <Route path="/tasks/:id" Component={TaskDetailPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
