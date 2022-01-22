import Layout from "./layout/index";
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import AutoPilot from './containers/AutoPilot';

export default function AppRouters() {

  return (
    <div>
      <Layout>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/auto-pilot"  render={() => <AutoPilot />}/>

        </Switch>
      </Layout>
    </div>

  )
}


