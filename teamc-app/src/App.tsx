import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import UserListPage from "./pages/UserListPage";
import UserProfilePage from "./pages/UserProfilePage";
import TaskDetailPage from "./pages/TaskDetailPage";
import TaskListPage from "./pages/TaskListPage";
import Header from "./components/Header";
import WelcomePage from "./pages/WelcomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import UserEditPage from "./pages/UserEditPage";
import CreateTask from "./pages/CreateTask" ;

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={WelcomePage} />
          <Route path="/signup" Component={SignUpPage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/users" Component={UserListPage} />
          <Route path="/users/:id" Component={UserProfilePage} />
          <Route path="/users/:id/edit" Component={UserEditPage} />
          <Route path="/tasks" Component={TaskListPage} />
          <Route path="/tasks/:id" Component={TaskDetailPage} />
          <Route path="/tasks/create" Component={CreateTask} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
