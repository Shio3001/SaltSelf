
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function get_time() {
    let date = new Date();
    let time = date.getTime();
    return time;
}
//js_canvas_setup()
var Module = {
    onRuntimeInitialized: function () {
        var salt3D_for_js_interface = new Module.ForJsInterface();
    }
};

export function add_surface() {

}


export class surface_control_individual extends React.Component {
    render() {
        return (
            <div className="surface_control_individual">
                <h1>ここに面の名前を記入</h1>
            </div>
        );
    }
}



export class Make3D extends React.Component {
    render() {
        console.log("Make3D render")
        return (
            <div>
                <canvas ref="view_canvas" width="1280" height="720"></canvas><br />
                <input type="button" value="描画" /><br />

                <div id="surface_control"></div>
                <div id="vertex_control"></div>

            </div >
        );
    }
}