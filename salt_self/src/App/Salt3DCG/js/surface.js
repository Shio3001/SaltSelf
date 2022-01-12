import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UUID from "uuidjs";
import Select from "react-select";

class SurfaceData {
  constructor(send_new_surface_name) {
    this.surface_ID = "surface" + UUID.generate();
    this.have_vertex = [];
    this.surface_name = send_new_surface_name;
  }

  setat_surface_ID(val) {
    this.surface_ID = val;
  }
  setat_have_vertex(val) {
    this.have_vertex = val;
  }
  setat_surface_name(val) {
    this.surface_name = val;
  }
}

export class VertexAtSurfaceControlIndividual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="div_VertexAtSurfaceControlIndividual">
        <h3>{this.props.send_have_vertex_name}</h3>

        <input
          type="button"
          value="削除"
          className="surface_delete_button"
          onClick={ui_add_surface_control.bind(
            this,
            this.OverwriteListSurfaceControl,
            this.state.list_surface_control,
            this.state.new_surface_name
          )}
        />
      </div>
    );
  }
}

export class SurfaceControlIndividual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      surface_ID: "surface" + UUID.generate(),
      have_vertex: [],
    };

    this.GetUUID = this.GetUUID.bind(this);
  }
  GetUUID() {
    return this.state.surface_ID;
  }
  render() {
    return (
      <div className="div_SurfaceControlIndividual">
        <h1>{this.props.send_new_surface_name}</h1>
        <h3 className="h3_uuid">{this.GetUUID()}</h3>
        {/* 
          <VertexAtSurfaceControlIndividual send_have_vertex_name={"text"} />
          <VertexAtSurfaceControlIndividual send_have_vertex_name={"みかん"} />
          <VertexAtSurfaceControlIndividual send_have_vertex_name={"text"} /> */}

        <div className="surface_add_control">
          {/* <input
                type="number"
                className="surface_add_select"
                value={this.state.vertex_x}
                onChange={this.OnChangeNewX}
              /> */}
          <Select
            className="surface_add_select"
            onChange={this.OnChangeNewX}
            size="1"
            options={this.props.ScanVertex()}
          />

          <input
            type="button"
            value="追加"
            className="surface_add_button"
            onClick={ui_add_surface_control.bind(
              this,
              this.OverwriteListSurfaceControl,
              this.state.list_surface_control,
              this.state.new_surface_name
            )}
          />
        </div>
      </div>
    );
  }
}
