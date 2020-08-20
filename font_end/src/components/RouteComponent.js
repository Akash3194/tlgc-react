import React, {Component} from 'react';
import '../App.css'
import { Switch, Route } from 'react-router-dom';
import Index from './indexComponent';
import Success from './SucessComponent'
import Error from './errorComponent'



class Root extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route component={Index} exact path="/" />
                    <Route component={Success} exact path="/success" />
                    <Route component={Error} exact path="/error" />

                </Switch>
            </div>
        );
    }

}

export default Root;