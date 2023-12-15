import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import UsersList from "./pages/UsersList";
import UserTasks from "./pages/UserTasks";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/users" exact component={UsersList} />
        <Route path="/user/:userId/tasks" component={UserTasks} />
        <Redirect from="/" to="/users" />
      </Switch>
    </Router>
  );
}

export default App;
