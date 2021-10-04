import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import Footer from './components/footer';
import homepage from './pages/homepage';
import Contacto from './pages/contacto';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Nav></Nav>
      <Switch>
        <Route path="/" exact component={homepage}/>
        <Route path="/contacto" exact component={Contacto}/>
      </Switch>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
