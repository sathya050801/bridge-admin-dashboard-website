import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import Results from "./pages/Results/Results";
import Announcements from "./pages/Announcements/Announcements";
import Queries from "./pages/Queries/Queries";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/userList">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/Results">
            <Results />
          </Route>
          <Route path="/Announcements">
            <Announcements />
            </Route>
            <Route path="/Queries">
            <Queries />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
