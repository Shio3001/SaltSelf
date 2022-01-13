import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UUID from "uuidjs";
import Select from "react-select";

import * as canvas_js from "./js/canvas.js";
import * as surface_js from "./js/surface.js";
import * as vertex_js from "./js/vertex.js";
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
  let copy_list_surface_control = Object.assign(list_surface_control);

  const new_surface_data = new surface_js.SurfaceData(send_new_surface_name);
  // <SurfaceControlIndividual send_new_surface_name={send_new_surface_name} ScanVertex={ScanVertex} />

  copy_list_surface_control[new_surface_data.surface_ID] = new_surface_data;

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
  let copy_list_vertex_control = Object.assign(list_vertex_control);

  const new_vertex_data = new vertex_js.VertexData(send_new_vertex_name);
  // <VertexControlIndividual send_new_vertex_name={send_new_vertex_name} />
  copy_list_vertex_control[new_vertex_data.vertex_ID] = new_vertex_data;

  OverwriteListVertexControl(copy_list_vertex_control);

  this.setState({
    new_vertex_name: "new vertex",
  });
}

export class Make3D extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list_surface_control: {},
      list_vertex_control: {},
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

    this.MakeSurfaceComponent = this.MakeSurfaceComponent.bind(this);
    this.MakeVertexComponent = this.MakeVertexComponent.bind(this);

    this.GetSurface = this.GetSurface.bind(this);
    this.GetVertex = this.GetVertex.bind(this);

    this.OverwriteIndividualSurfaceControl =
      this.OverwriteIndividualSurfaceControl.bind(this);
    this.OverwriteIndividualVertexControl =
      this.OverwriteIndividualVertexControl.bind(this);
  }
  MakeSurfaceComponent() {
    let temp_component = [];
    Object.values(this.state.list_surface_control).map((data, i) =>
      temp_component.push(
        <surface_js.SurfaceControlIndividual
          surface_control={data}
          send_new_surface_name={data.surface_name}
          OverwriteIndividualSurfaceControl={this.OverwriteIndividualSurfaceControl}
          surface_ID={data.surface_ID}
          ScanVertex={this.ScanVertex}
          GetVertex={this.GetVertex}
        />
      )
    );
    return temp_component;
    // {this.state.list_vertex_control.map((fruit, i) => (
    //   <div key={i}>{fruit}</div> //SurfaceControlIndividualを追加するmap (list_surface_controlに入っている)
    // ))}
  }
  MakeVertexComponent() {
    let temp_component = [];
    Object.values(this.state.list_vertex_control).map((data, i) =>
      temp_component.push(
        <vertex_js.VertexControlIndividual
          vertex_ID={data.vertex_ID}
          vertex_control={data}
          OverwriteIndividualVertexControl={
            this.OverwriteIndividualVertexControl
          }
          send_new_vertex_name={data.vertex_name}
        />
      )
    );
    return temp_component;
  }

  ScanVertex() {
    let options = [];

    Object.values(this.state.list_vertex_control).map((data, i) =>
      options.push({ value: data.vertex_ID, label: data.vertex_name })
    );

    return options;
  }

  GetSurface(surface_uuid){
    return this.state.list_surface_control[surface_uuid]
  }
  GetVertex(vertex_uuid){
    return this.state.list_vertex_control[vertex_uuid]
  }

  //setStateに配慮しつつ個別て変更する Surface
  OverwriteIndividualSurfaceControl(copy_surface_control) {
    const copy_list_surface_control = Object.assign(
      this.state.list_surface_control
    );
    copy_list_surface_control[copy_surface_control.surface_ID] =
      copy_surface_control;
    this.setState({
      list_surface_control: copy_list_surface_control,
    });
  }

  //setStateに配慮しつつ個別て変更する Vertex
  OverwriteIndividualVertexControl(copy_vertex_control) {
    const copy_list_vertex_control = Object.assign(
      this.state.list_vertex_control
    );
    copy_list_vertex_control[copy_vertex_control.vertex_ID] =
      copy_vertex_control;
    console.log(
      "copy_vertex_control.surface_ID",
      copy_vertex_control.vertex_ID
    );
    this.setState({
      list_vertex_control: copy_list_vertex_control,
    });
  }

  //まとめて変更する
  OverwriteListSurfaceControl(copy_list_surface_control) {
    this.setState({
      list_surface_control: copy_list_surface_control,
    });

    console.log("typeof", typeof this.state.list_surface_control);
    console.log("length", this.state.list_surface_control.length);
  }
  //まとめて変更する
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
              this.ScanVertex
            )}
          />
        </div>

        <div className="surface_control_area">
          {this.MakeSurfaceComponent().map((fruit, i) => (
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
          {this.MakeVertexComponent().map((fruit, i) => (
            <div key={i}>{fruit}</div> //SurfaceControlIndividualを追加するmap (list_surface_controlに入っている)
          ))}
        </div>
      </div>
    );
  }
}
