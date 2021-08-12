import boy from './images/boy.png';
import './tailwind.min.css';
import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import Words from './Words';
import Landing from './Landing';
import Senses from './Senses';
import Animal from './Animal';
import Nurrym from './Nurrym';
import Learn from './Learn';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom';
function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Landing />
        <div id ="imgc" className="center3 popup"> <img src={boy} alt="Boy"/></div>
        <Switch>
        <Route path = "/learn" >
            <Learn />
          </Route>
          <Route path = "/nurrym" >
            <Nurrym />
          </Route>
          <Route path = "/words" >
            <Words />
          </Route>
          {/* <Route path = "/animal" >
            <Animal />
          </Route> */}
          <Route path = "/senses" >
            <Senses />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
