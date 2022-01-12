import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UUID from "uuidjs";
import Select from 'react-select'

import * as canvas_js from './js/canvas.js';
import * as surface_js from './js/surface.js';
import * as vertex_js from './js/vertex.js';
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



function ui_add_surface_control(
  OverwriteListSurfaceControl,
  list_surface_control,
  send_list_vertex_control,
  send_new_surface_name,
  ScanVertex
) {
  let copy_list_surface_control = list_surface_control.slice();

  copy_list_surface_control.push(
    // <SurfaceControlIndividual send_new_surface_name={send_new_surface_name} ScanVertex={ScanVertex} />

    new SurfaceData(send_new_surface_name)
  );

  OverwriteListSurfaceControl(copy_list_surface_control);

}

function ui_add_vertex_control(
  OverwriteListVertexControl,
  list_vertex_control,
  send_new_vertex_name
) {
  let copy_list_vertex_control = list_vertex_control.slice();

  copy_list_vertex_control.push(
    // <VertexControlIndividual send_new_vertex_name={send_new_vertex_name} />
    new VertexData(send_new_vertex_name)
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
    this.ScanVertex = this.ScanVertex.bind(this);
  }
  MakeSurfaceComponent(){

  }
  MakeVertexComponent(){

  }

  ScanVertex() {
    let options = []
    for (var i = 0; i < this.state.list_vertex_control.length; i++) {
      const vertex_component = this.state.list_vertex_control[i]
      const vertex_component_states = vertex_component.GetUUID()
      console.log("vertex_component_states",vertex_component_states)

      console.log("vertex_component", typeof (vertex_component), vertex_component.state)
      const value_label = { value: vertex_component.vertex_ID, label: vertex_component.new_vertex_name }
      options.push(value_label)
    }
    console.log("options",options)

    return options
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

  RunViewDraw(event) { }

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
        <canvas_js.CanvasComponent />

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
              this.state.list_vertex_control,
              this.state.new_surface_name,
              this.ScanVertex,
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
