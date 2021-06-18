import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// Style
import Grid from '@material-ui/core/Grid';

// Card Component
import CardComponent from './components/card/CardComponent';

// Pages
import Lv1 from './views/Lv1/index';
import Lv2 from './views/Lv2/index';
import Lv3 from './views/Lv3/index';

// Router Introduction
const routerVersions = [
  {
    id: 0,
    title: 'LV1: Normal React Router Instructions',
    desc: '關於 react-router-dom 的普通使用方法',
    image: 'https://i02piccdn.sogoucdn.com/ca4d47fb148a37f4',
    path: '/Lv1'
  },
  {
    id: 1,
    title: 'LV2: Normal React Router with Nested Instructions',
    desc: '關於 react-router-dom 的巢狀使用方法',
    image: 'https://img.lovepik.com/original_origin_pic/18/08/24/cd5e593ef835dd164a3b681e2ad1d913.png_wh860.png',
    path: '/Lv2'
  },
  {
    id: 2,
    title: 'LV3: Advanced React Router with Nested Instructions',
    desc: '關於 react-router-dom 的巢狀及進階使用方法',
    image: 'https://img95.699pic.com/xsj/0k/c6/7f.jpg!/fh/300',
    path: '/Lv3'
  }
];

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <React.Fragment>
            <header className="App-header">
              <Route exact path="/" render={()=> (
                <div style={{ height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}>
                  <img src={logo} className="App-logo" alt="logo" />
                    <Grid container align="center" spacing={4}>
                      {
                        routerVersions.map((routerVersion) => (
                          <Grid item xs={12} md={6} lg={4} key={routerVersion.id}>
                            <CardComponent cardInfo={routerVersion}/>
                          </Grid>
                        ))
                      }
                    </Grid>
                </div>
              )} />
            
            {/* 普通路由 */}
            <Route path="/Lv1" component={Lv1} />
            <Route path="/Lv2" component={Lv2} />
            <Route path="/Lv3" component={Lv3} />
            </header>
          </React.Fragment>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
