
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


var count = 0
function ui_add_surface_control(OverwriteListSurfaceControl, list_surface_control) {

    console.log("Make3D 追加", count)

    console.log("ui_add_surface_control_state", typeof (list_surface_control))

    let copy_list_surface_control = list_surface_control.slice();
    copy_list_surface_control.push(<SurfaceControlIndividual />)
    OverwriteListSurfaceControl(copy_list_surface_control)

    console.log("ui_add_surface_control_state2", typeof (copy_list_surface_control))

    count++
}

export class Make3D extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list_surface_control: [<SurfaceControlIndividual />]
        };

        this.OverwriteListSurfaceControl = this.OverwriteListSurfaceControl.bind(this)
    }



    OverwriteListSurfaceControl(copy_list_surface_control) {
        this.setState({
            list_surface_control: copy_list_surface_control,
        });

        console.log("typeof", typeof (this.state.list_surface_control))
        console.log("length", this.state.list_surface_control.length)
    }

    render() {
        console.log("Make3D render")
        console.log(this.state.list_surface_control)
        console.log("OverwriteListSurfaceControl", typeof (this.OverwriteListSurfaceControl))
        console.log(typeof (this.state.list_surface_control))


        return (
            <div>
                <canvas ref="view_canvas" width="1280" height="720"></canvas><br />
                <input type="button" value="描画" onClick={ui_add_surface_control.bind(this, this.OverwriteListSurfaceControl, this.state.list_surface_control)} /><br />
                {this.state.list_surface_control.map((fruit, i) => <div key={i}>{fruit}</div>)}
            </div >
        );
    }
}