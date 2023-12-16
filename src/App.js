import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";
import UsersList from "./pages/UsersList";
import UserTasks from "./pages/UserTasks";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" exact component={UsersList} />
          <Route path="/user/:userId/tasks" component={UserTasks} />
          {/* <Redirect from="/" to="/users" /> */}
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
