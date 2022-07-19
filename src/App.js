// import logo from './logo.svg';
import './App.css';
import { Route, Switch,Redirect } from 'react-router-dom'

import Home from './shivhome';
import About from './about';
import Navbar from './navbar';
import Deshboard from './deshboard';
function App() {
  const homepage =true;
  console.log("this is runnnnn");
  return (
    <div className="App">
        {/* <Navbar /> */}
        {/* <Deshboard /> */}
        <Switch>
                <Route exact path='/' render={()=>{
                return(
                    homepage ? <Redirect to='/' /> :
                    null
                )   } 
            } />
            <Route exact path='/deshboard' component={Deshboard} />
                <Route  path='/home' component={Home} />
                 <Route path='/about' component={About } />
            </Switch>
    </div>
  );
}

export default App;
