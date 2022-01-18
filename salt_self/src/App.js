import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

import MySelf from './App/MySelf/MySelf.js';
import './App/MySelf/MySelf.css';
import './app.css';
import * as Make3D_js from './App/Salt3DCG/make3D.js';
import './App/Salt3DCG/make3D.css';

// /Users/maruyama/Programs/SaltSeries/SaltSelf/salt_self/src/App.js

// import * as wasm_forweb_js from "./App/Salt3DCG/cpp/forjs/wasm_forweb.js";
// import * as wasm_forweb_wasm from "./App/Salt3DCG/cpp/forjs/wasm_forweb.wasm";

// // var list_surface_control = [];
// function Addlist_surface_control(new_list_surface_control) {
//     console.log("Addlist_surface_control")
//     list_surface_control.push(new_list_surface_control)
// }

// import('./App/Salt3DCG/cpp/forjs/wasm_forweb.js').then(Module => {
//     console.log("module",Module)
//     const { ForJsInterface } = Module
//     console.log("ForJsInterface",ForJsInterface)
//   })
  

class App extends React.Component {

    // hw = wasm_forweb_js({
    //     locateFile: () => {
    //       return wasm_forweb_wasm;
    //     },
    //   })

    // componentDidMount() {
    // hw.then((core) => {
    //     console.log("LOADED WASM_FORWEB!?")
    //     core.ForJsInterface()
    //     console.log("interface inited")
    //     })
    // }

    render() {
        console.log("App render")


        return (
            <div className="App">
                <Router>
                    <Routes>
                        <>
                            <Route exact path='/' element={<MySelf />} />
                            <Route exact path='/view' element={<Make3D_js.Make3D />} />
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

