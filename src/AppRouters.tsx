import Layout from "./layout/index";
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './containers/Login';
import Home from './containers/Home';

export default function AppRouters() {

  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="login" />

        </Switch>
      </Layout>
    </div>

  )
}


