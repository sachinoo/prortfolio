import profile from './images/profile.jpg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { Route, Switch } from 'react-router';

const Routing = () =>{
    return(
      <Switch>
        <Route path ="/" exact component = {Home}/>

      </Switch>

    );
};


function App() {
  return (
    <Navbar/>

  );
}

export default App;
