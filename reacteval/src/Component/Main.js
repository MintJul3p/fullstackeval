import SectionDetail from "../View/SectionDetail";
import TeacherDetail from "../View/TeacherDetail";
import {Create} from "../View/Create";

const {Component} = require('react');
const React = require("react");
const {Container} = require("react-bootstrap");
const {Switch, Route} = require("react-router-dom");
const {Home} = require('../View/Home')
const {Sections} = require('../View/Sections');
const {Teachers} = require('../View/Teachers')

class Main extends Component {
    render() {
        return (
            <Container>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/Sections">
                        <Sections/>
                    </Route>
                    <Route path="/Teachers">
                        <Teachers/>
                    </Route>
                    <Route path="/Home">
                        <Home/>
                    </Route>
                    <Route path="/Create">
                        <Create/>
                    </Route>
                    <Route path="/SectionDetail/:id">
                        <SectionDetail/>
                    </Route>
                    <Route path="/TeacherDetail/:id">
                        <TeacherDetail/>
                    </Route>

                </Switch>
            </Container>
        )
    }
}

export {Main};
