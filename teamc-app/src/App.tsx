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
import MyProfilePage from "./pages/MyProfilePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" Component={WelcomePage} />
          <Route path="/signup" Component={SignUpPage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/myprofile" Component={MyProfilePage} />
          <Route path="/myprofile/edit" Component={UserEditPage} />
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
