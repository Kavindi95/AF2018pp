import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import ViewCourse from './components/course/viewCourse/viewCourse';
import InsertCourse from './components/course/insertCourse/insertCourse';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    componentDidMount() {
        fetch('/api/messages', {method: 'GET'})
            .then(res => res.json())
            .then(jsonRes => {
                this.setState({message: jsonRes.message});
            })
            .catch(err => {
                this.setState({message: 'An error occurred'});
            });
    }

    render() {
        return(
            <Router>
                <div className="container">
                    <h2>{this.state.message}</h2>
                    <Link style={{marginRight :"10px"}} to={"/InsertCourse"}>Insert Course</Link>
                    <Link to={"/ViewCourse"}>View Course</Link>
                    <Switch>
                        <Route path="/InsertCourse" component={InsertCourse} ></Route>
                        <Route path="/ViewCourse" component={ViewCourse} ></Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}
