import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

import MySelf from './App/MySelf/MySelf.js';
import './App/MySelf/MySelf.css';
import * as Make3D_js from './App/Salt3DCG/make3D.js';


var list_surface_control = [];
function Addlist_surface_control(new_list_surface_control) {
    console.log("Addlist_surface_control")
    list_surface_control.push(new_list_surface_control)
}

class App extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        console.log("App render")
        return (
            <div className="App">
                <Router>
                    <Routes>
                        <>
                            <Route exact path='/' element={<MySelf />} />
                            <Route exact path='/view' element={<Make3D_js.Make3D list_surface_control={list_surface_control} Addlist_surface_control={Addlist_surface_control} />} />
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

