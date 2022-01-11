import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UUID from 'uuidjs';
 
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

export class CanvasComponent extends React.Component {
  componentDidMount() {
    var canvas = document.getElementById("view_canvas");
    var context = canvas.getContext("2d");

    context.fillRect(0, 0, canvas.width, canvas.height);
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    let width = imageData.width,
      height = imageData.height;
    console.log("width height", width, height);
  }

  render() {
    return (
      <div className="div_CanvasComponent">
        <canvas id="view_canvas" width="1280" height="720"></canvas>
      </div>
    );
  }
}

export class VertexControlIndividual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vertex_x: 0,
      vertex_y: 0,
      vertex_z: 0,
      vertex_ID : "vertex" + UUID.generate(),
    };

    this.OnChangeNewX = this.OnChangeNewX.bind(this);
    this.OnChangeNewY = this.OnChangeNewY.bind(this);
    this.OnChangeNewZ = this.OnChangeNewZ.bind(this);
    this.GetUUID = this.GetUUID.bind(this);
  }

  GetUUID(){
    return this.state.vertex_ID
  }

  OnChangeNewX(event) {
    var text = event.target.value;
    console.log("text", text);
    this.setState({
      vertex_x: text,
    });
  }
  OnChangeNewY(event) {
    var text = event.target.value;
    console.log("text", text);
    this.setState({
      vertex_y: text,
    });
  }
  OnChangeNewZ(event) {
    var text = event.target.value;
    console.log("text", text);
    this.setState({
      vertex_z: text,
    });
  }
  render() {
    return (
      <div className="div_VertexControlIndividual">
        <h1>{this.props.send_new_vertex_name}</h1>

        <h3 className="h3_uuid">{this.GetUUID()}</h3>

        <div className="coordinate">
          <p>
            x
            <input
              type="number"
              className="textbox_xyz"
              value={this.state.vertex_x}
              onChange={this.OnChangeNewX}
            />
          </p>
        </div>

        <div className="coordinate">
          <p>
            y
            <input
              type="number"
              className="textbox_xyz"
              value={this.state.vertex_y}
              onChange={this.OnChangeNewY}
            />
          </p>
        </div>

        <div className="coordinate">
          <p>
            z
            <input
              type="number"
              className="textbox_xyz"
              value={this.state.vertex_z}
              onChange={this.OnChangeNewZ}
            />
          </p>
        </div>
      </div>
    );
  }
}

export class SurfaceControlIndividual extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      surface_ID : "surface" + UUID.generate(),
    };

    this.GetUUID = this.GetUUID.bind(this);
  }
  GetUUID(){
    return this.state.surface_ID
  }
  render() {
    return (
      <div className="div_SurfaceControlIndividual">
        <h1>{this.props.send_new_surface_name}</h1>
        <h3 className="h3_uuid">{this.GetUUID()}</h3>
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

  this.setState({
    new_surface_name: "new surface",
  });


}

function ui_add_vertex_control(
  OverwriteListVertexControl,
  list_vertex_control,
  send_new_vertex_name
) {
  let copy_list_vertex_control = list_vertex_control.slice();

  copy_list_vertex_control.push(
    <VertexControlIndividual send_new_vertex_name={send_new_vertex_name} />
  );

  OverwriteListVertexControl(copy_list_vertex_control);

  this.setState({
    new_vertex_name: "new vertex",
  });
}

export class Make3D extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list_surface_control: [],
      list_vertex_control: [],
      new_surface_name: "new surface",
      new_vertex_name: "new vertex",
    };

    this.OverwriteListSurfaceControl =
      this.OverwriteListSurfaceControl.bind(this);

    this.OverwriteListVertexControl =
      this.OverwriteListVertexControl.bind(this);

    this.OnChangeNewSurfaceName = this.OnChangeNewSurfaceName.bind(this);
    this.OnChangeNewVertexName = this.OnChangeNewVertexName.bind(this);
    this.RunViewDraw = this.RunViewDraw.bind(this);
  }

  OverwriteListSurfaceControl(copy_list_surface_control) {
    this.setState({
      list_surface_control: copy_list_surface_control,
    });

    console.log("typeof", typeof this.state.list_surface_control);
    console.log("length", this.state.list_surface_control.length);
  }
  OverwriteListVertexControl(copy_list_vertex_control) {
    this.setState({
      list_vertex_control: copy_list_vertex_control,
    });

    console.log("typeof", typeof this.state.list_vertex_control);
    console.log("length", this.state.list_vertex_control.length);
  }
  OnChangeNewVertexName(event) {
    var text = event.target.value;
    console.log("text", text);
    this.setState({
      new_vertex_name: text,
    });
  }

  OnChangeNewSurfaceName(event) {
    var text = event.target.value;
    console.log("text", text);
    this.setState({
      new_surface_name: text,
    });
  }

  RunViewDraw(event) {}

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
        <p>WebAssemblyを使いC++と連携した自作描画ツール</p>
        <CanvasComponent />

        <div className="view_control_area">
          <input
            type="button"
            value="描画"
            className="input_button"
            onClick={this.RunViewDraw.bind(this)}
          />
        </div>

        <div className="surface_add_area">
          <p>
            <input
              type="text"
              className="textbox"
              value={this.state.new_surface_name}
              onChange={this.OnChangeNewSurfaceName}
            />
          </p>
          <input
            type="button"
            value="面を追加"
            className="input_button"
            onClick={ui_add_surface_control.bind(
              this,
              this.OverwriteListSurfaceControl,
              this.state.list_surface_control,
              this.state.new_surface_name
            )}
          />
        </div>

        <div className="surface_control_area">
          {this.state.list_surface_control.map((fruit, i) => (
            <div key={i}>{fruit}</div> //SurfaceControlIndividualを追加するmap (list_surface_controlに入っている)
          ))}
        </div>

        <div className="vertex_add_area">
          <p>
            <input
              type="text"
              className="textbox"
              value={this.state.new_vertex_name}
              onChange={this.OnChangeNewVertexName}
            />
          </p>
          <input
            type="button"
            value="頂点を追加"
            className="input_button"
            onClick={ui_add_vertex_control.bind(
              this,
              this.OverwriteListVertexControl,
              this.state.list_vertex_control,
              this.state.new_vertex_name
            )}
          />
        </div>

        <div className="vertex_control_area">
          {this.state.list_vertex_control.map((fruit, i) => (
            <div key={i}>{fruit}</div> //SurfaceControlIndividualを追加するmap (list_surface_controlに入っている)
          ))}
        </div>
      </div>
    );
  }
}
