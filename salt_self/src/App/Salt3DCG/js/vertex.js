import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UUID from "uuidjs";
import Select from "react-select";

export class VertexData {
  constructor(send_new_vertex_name) {
    this.vertex_x = 0;
    this.vertex_y = 0;
    this.vertex_z = 0;
    this.vertex_ID = "vertex" + UUID.generate();
    this.vertex_name = send_new_vertex_name;
  }
  setat_vertex_x(val) {
    this.vertex_x = val;
  }
  setat_vertex_y(val) {
    this.vertex_y = val;
  }
  setat_vertex_z(val) {
    this.vertex_z = val;
  }
  setat_vertex_ID(val) {
    this.vertex_ID = val;
  }
  setat_vertex_name(val) {
    this.vertex_name = val;
  }
}

export class VertexControlIndividual extends React.Component {
  constructor(props) {
    super(props);
    
    this.OnChangeNewX = this.OnChangeNewX.bind(this);
    this.OnChangeNewY = this.OnChangeNewY.bind(this);
    this.OnChangeNewZ = this.OnChangeNewZ.bind(this);

    this.state = {
      // for_view_x : this.props.vertex_control.vertex_x,
      // for_view_y : this.props.vertex_control.vertex_y,
      // for_view_z : this.props.vertex_control.vertex_z,
    }
    // this.GetUUID = this.GetUUID.bind(this);

    // console.log("new_vertex_name",this.state.new_vertex_name)
  }

  OnChangeNewX(event) {
    var text = event.target.value;
    console.log("text", text);
    const copy_vertex_control = Object.assign(this.props.vertex_control)
    copy_vertex_control.vertex_x = text;
    this.props.OverwriteIndividualVertexControl(copy_vertex_control)
  }

  OnChangeNewY(event) {
    var text = event.target.value;
    console.log("text", text);

    const copy_vertex_control = Object.assign(this.props.vertex_control)
    copy_vertex_control.vertex_y = text;
    this.props.OverwriteIndividualVertexControl(copy_vertex_control)
  }

  OnChangeNewZ(event) {
    var text = event.target.value;
    console.log("text", text);
    const copy_vertex_control = Object.assign(this.props.vertex_control)
    copy_vertex_control.vertex_z = text;
    this.props.OverwriteIndividualVertexControl(copy_vertex_control)
  }
  
  render() {
    return (
      <div className="div_VertexControlIndividual">
        <h1>{this.props.send_new_vertex_name}</h1>

        <h3 className="h3_uuid">{this.props.vertex_ID}</h3>

        <div className="coordinate">
          <p>
            x
            <input
              type="number"
              className="textbox_xyz"
              value={this.props.vertex_control.vertex_x}
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
              value={this.props.vertex_control.vertex_y}
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
              value={this.props.vertex_control.vertex_z}
              onChange={this.OnChangeNewZ}
            />
          </p>
        </div>
      </div>
    );
  }
}
