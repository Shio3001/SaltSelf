import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
  },
};

// let canvas = document.getElementById('view_canvas');
// let context = canvas.getContext('2d');
// context.fillRect(0, 0, canvas.width, canvas.height);
// let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
// let width = imageData.width, height = imageData.height;
// console.log("width height", width, height)

export class SurfaceControlIndividual extends React.Component {
  render() {
    return (
      <div className="div_SurfaceControlIndividual">
        <h1>{this.props.send_new_surface_name}</h1>
      </div>
    );
  }
}

function ui_add_surface_control(
  OverwriteListSurfaceControl,
  list_surface_control,
  send_new_surface_name
) {
  let copy_list_surface_control = list_surface_control.slice();
  copy_list_surface_control.push(
    <SurfaceControlIndividual send_new_surface_name={send_new_surface_name} />
  );
  OverwriteListSurfaceControl(copy_list_surface_control);
}

export class Make3D extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list_surface_control: [],
      new_surface_name: "ここにテキストを入力",
    };

    this.OverwriteListSurfaceControl =
      this.OverwriteListSurfaceControl.bind(this);
    this.OnChangeNewSurfaceName = this.OnChangeNewSurfaceName.bind(this);
  }

  OverwriteListSurfaceControl(copy_list_surface_control) {
    this.setState({
      list_surface_control: copy_list_surface_control,
    });

    console.log("typeof", typeof this.state.list_surface_control);
    console.log("length", this.state.list_surface_control.length);
  }

  OnChangeNewSurfaceName(event) {
    var text = event.target.value;
    console.log("text", text);
    this.setState({
      new_surface_name: text,
    });
  }

  render() {
    console.log("Make3D render");
    console.log(this.state.list_surface_control);
    console.log(
      "OverwriteListSurfaceControl",
      typeof this.OverwriteListSurfaceControl
    );
    console.log(typeof this.state.list_surface_control);

    return (
      <div>
        <canvas ref="view_canvas" width="1280" height="720"></canvas>
        <br />
        <input
          type="button"
          value="描画"
          onClick={ui_add_surface_control.bind(
            this,
            this.OverwriteListSurfaceControl,
            this.state.list_surface_control
          )}
        />
        <br />

        {/* <p>ここに入力<input type="text" value={this.state.some_code}
                    onChange={e => this.handleOnChange(e)} /></p> */}
        <p>
          <input
            type="text"
            value={this.state.new_surface_name}
            onChange={this.OnChangeNewSurfaceName}
          />
        </p>
        <input
          type="button"
          value="面を追加"
          onClick={ui_add_surface_control.bind(
            this,
            this.OverwriteListSurfaceControl,
            this.state.list_surface_control,
            this.state.new_surface_name
          )}
        />
        <br />
        {this.state.list_surface_control.map((fruit, i) => (
          <div key={i}>{fruit}</div>
        ))}
      </div>
    );
  }
}
