import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/Header";
import {Switch, Route} from "react-router-dom";
import Homepage from "./containers/Homepage";
import DogDetail from "./components/DogDetail";

class App extends React.Component{
    render(){
        return (
            <div className="App">
                <Header />
                <Switch>
                    
                    <Route path="/" exact component={Homepage} />
                    <Route path='/hakkinda' exact component={() => <div>Hakkimizda...</div>} />
                    <Route path="/detail/:id" exact component={DogDetail} />
                    <Route component={() => <div><h1>404 sayfa bulununamadi</h1></div>} />
                    
                    {/*{*/}
                    {/*    routes.map((route) => {*/}
                    {/*        // <Route {...route} />*/}
                    {/*        return <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />*/}
                    {/*    })*/}
                    {/*}*/}
                </Switch>
            </div>
        );
    }
}

export default App;
