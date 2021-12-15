
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

var salt3D_for_js_interface;

function get_time() {
    let date = new Date();
    let time = date.getTime();
    return time;
}
//js_canvas_setup()
var Module = {
    onRuntimeInitialized: function () {
        salt3D_for_js_interface = new Module.ForJsInterface();
    }
};

export class SurfaceControlIndividual extends React.Component {
    render() {
        return (
            <div className="div_SurfaceControlIndividual">
                <h1>ここに面の名前を記入</h1>
            </div>
        );
    }
}

const list_surface_control = [<SurfaceControlIndividual />, <SurfaceControlIndividual />, <SurfaceControlIndividual />]

var count = 0

function ui_add_surface_control() {
    console.log("Make3D 追加")
    list_surface_control.push(<SurfaceControlIndividual />)
    count++
}



export class Make3D extends React.Component {
    render() {
        console.log("Make3D render")

        return (
            <div>
                <canvas ref="view_canvas" width="1280" height="720"></canvas><br />
                <input type="button" value="描画" onClick={ui_add_surface_control} /><br />

                {/* {list_surface_control.map((fruit, i) => <li key={i}>{fruit}</li>)} */}

                {list_surface_control.map((fruit, i) => <div key={i}>{fruit}</div>)}
            </div >
        );
    }
}