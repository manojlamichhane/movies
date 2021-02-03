import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Trending from './Pages/Trending';
import Movie from './Pages/Movie'


function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/trending" exact component={Trending}/>
        <Route path="/movies/:id" exact component={Movie}/>
        
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
