import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UUID from "uuidjs";
import Select from "react-select";

class VertexData {
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
    this.state = {
      vertex_x: 0,
      vertex_y: 0,
      vertex_z: 0,
      vertex_ID: "vertex" + UUID.generate(),
      new_vertex_name: this.props.send_new_vertex_name,
    };

    this.OnChangeNewX = this.OnChangeNewX.bind(this);
    this.OnChangeNewY = this.OnChangeNewY.bind(this);
    this.OnChangeNewZ = this.OnChangeNewZ.bind(this);
    this.GetUUID = this.GetUUID.bind(this);

    // console.log("new_vertex_name",this.state.new_vertex_name)
  }

  GetUUID() {
    return this.state.vertex_ID;
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
