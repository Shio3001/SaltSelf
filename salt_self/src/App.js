import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

import MySelf from './App/MySelf/MySelf.js';
import './App/MySelf/MySelf.css';
import * as Make3D_js from './App/Salt3DCG/make3D.js';


// // var list_surface_control = [];
// function Addlist_surface_control(new_list_surface_control) {
//     console.log("Addlist_surface_control")
//     list_surface_control.push(new_list_surface_control)
// }

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list_surface_control: [<Make3D_js.SurfaceControlIndividual />]
        };
    }


    OverwriteListSurfaceControl(copy_list_surface_control) {
        this.setState({
            list_surface_control: copy_list_surface_control,
        });

        console.log("typeof", typeof (this.state.list_surface_control))
        console.log("length", this.state.list_surface_control.length)
    }

    render() {
        console.log("App render")
        console.log("render typeof", typeof (this.state.list_surface_control))
        return (
            <div className="App">
                <Router>
                    <Routes>
                        <>
                            <Route exact path='/' element={<MySelf />} />
                            <Route exact path='/view' element={<Make3D_js.Make3D OverwriteListSurfaceControl={() => { this.OverwriteListSurfaceControl(); }} state={this.state} />} />
                        </>
                    </Routes>
                </Router>

            </div>
        );
    };
}

export default App;

// ReactDOM.render(
//     <MySelf />,
//     document.getElementById('root')
// );

