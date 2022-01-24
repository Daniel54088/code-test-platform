import Layout from "./layout/index";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './containers/Home';
import AutoPilot from './containers/AutoPilot';
import CoverGenius from './containers/CoverGenius';

export default function AppRouters() {

  return (
    <div>
      <Layout>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/auto-pilot" render={() => <AutoPilot />} />
            <Route exact path="/cover-genius" render={() => <CoverGenius />} />
          </Switch>
        </BrowserRouter>
      </Layout>
    </div>

  )
}


