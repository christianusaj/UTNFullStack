import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import './App.css';
import './blog.css';
import './galeria.css';
import './noticias.css';
import Header from './components/header';
import Nav from './components/nav';
import Footer from './components/footer';
import homepage from './pages/homepage';
import Contacto from './pages/contacto';
import Blog from './pages/blog';
import Galeria from './pages/galeria';
import Noticias from './pages/noticias';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Nav></Nav>
      <Switch>
        <Route path="/" exact component={homepage}/>
        <Route path="/contacto" exact component={Contacto}/>
        <Route path="/blog" exact component={Blog}/>
        <Route path="/galeria" exact component={Galeria}/>
        <Route path="/noticias" exact component={Noticias}/>
      </Switch>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
