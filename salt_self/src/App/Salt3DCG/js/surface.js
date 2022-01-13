import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UUID from "uuidjs";
import Select from "react-select";

export class SurfaceData {
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
  addat_have_vertex(val) {
    this.have_vertex.push(val);
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
        //   onClick={ui_add_surface_control.bind(
        //     this,
        //     this.OverwriteListSurfaceControl,
        //     this.state.list_surface_control,
        //     this.state.new_surface_name
        //   )}
        />
      </div>
    );
  }
}

export class SurfaceControlIndividual extends React.Component {
  constructor(props) {
    super(props);
    this.OnClick_add_vertex_for_surface = this.OnClick_add_vertex_for_surface.bind(this);
    this.OnChangeSurfaceAddSelect = this.OnChangeSurfaceAddSelect.bind(this);
    this.MakeVertexAtSurfaceComponent = this.MakeVertexAtSurfaceComponent.bind(this);


    this.state = {
      surface_add_select_now : ""
    }


  }

  OnChangeSurfaceAddSelect(event){
    const now_select = event.value;

    
    console.log("now_select",now_select)

    this.setState({
      surface_add_select_now : now_select,
    });
  }

  OnClick_add_vertex_for_surface(){

    console.log("this.state.surface_add_select_now",this.state.surface_add_select_now)

    const copy_surface_control = Object.assign(this.props.surface_control)
    copy_surface_control.addat_have_vertex(this.state.surface_add_select_now)
    this.props.OverwriteIndividualSurfaceControl(copy_surface_control)
  }

  MakeVertexAtSurfaceComponent(){
    let temp_component = [];
    this.props.surface_control.have_vertex.map((val, i) =>
      {
        const vertex = this.props.GetVertex(val)
        console.log("MakeVertexAtSurfaceComponent",vertex,val)

        temp_component.push(
          <VertexAtSurfaceControlIndividual send_have_vertex_name={vertex.vertex_name} />
        )
      }

    );
    return temp_component;
  }

  render() {
    return (
      <div className="div_SurfaceControlIndividual">
        <h1>{this.props.send_new_surface_name}</h1>
        <h3 className="h3_uuid">{this.props.surface_ID}</h3>
        {/* 
          <VertexAtSurfaceControlIndividual send_have_vertex_name={"text"} />
          <VertexAtSurfaceControlIndividual send_have_vertex_name={"みかん"} />
          <VertexAtSurfaceControlIndividual send_have_vertex_name={"text"} /> */}
          {this.MakeVertexAtSurfaceComponent().map((fruit, i) => (
            <div key={i}>{fruit}</div> //SurfaceControlIndividualを追加するmap (list_surface_controlに入っている)
          ))}

        <div className="surface_add_control">
          {/* <input
                type="number"
                className="surface_add_select"
                value={this.state.vertex_x}
                onChange={this.OnChangeNewX}
              /> */}
          <Select
            className="surface_add_select"
            onChange={this.OnChangeSurfaceAddSelect}
            size="1"
            options={this.props.ScanVertex()}
          />

          <input
            type="button"
            value="追加"
            className="surface_add_button"

            onClick={this.OnClick_add_vertex_for_surface}
            // onClick={ui_add_surface_control.bind(
            //   this,
            //   this.OverwriteListSurfaceControl,
            //   this.state.list_surface_control,
            //   this.state.new_surface_name
            // )}
          />
        </div>
      </div>
    );
  }
}
