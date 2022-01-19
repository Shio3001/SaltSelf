import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UUID from "uuidjs";
import Select from "react-select";

// import wasm_forweb from "../cpp/forjs/wasm_forweb.js"

// const salt3D_for_js_interface = new wasm_forweb.ForJsInterface();
// console.log("salt3D_for_js_interface",salt3D_for_js_interface)

// var importObject = { imports: { imported_func: arg => console.log(arg) } };
// WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
// .then(obj => obj.instance.exports.exported_func());

// console.log("WebAssembly",WebAssembly)

// var importObject = { salt3D_for_js_interface = new Module.ForJsInterface() };
// WebAssembly.instantiateStreaming(fetch('cpp/forjs/wasm_forweb.wasm'), importObject)
// .then(obj => obj.instance.exports.exported_func());

// export var salt3D_for_js_interface;
// var Module = {
//   onRuntimeInitialized: function () {
//     salt3D_for_js_interface = new Module.ForJsInterface();
//     console.log("import salt3D_for_js_interface")
//   },
// };

// WebAssembly.compileStreaming(fetch("cpp/forjs/wasm_forweb.wasm"))
// .then(function(mod) {
//   var imports = WebAssembly.Module.imports(mod);
//   console.log(imports[0]);
// });

// import * as WasmControl from "../cpp/forjs/wasm_forweb.js";

// // 
// console.log("salt3D_for_js_interface",salt3D_for_js_interface)

export function VertexInterpretation() {

  console.log("描画検証開始")
  // console.log("salt3D_for_js_interface",salt3D_for_js_interface)
  // const list_surface_control_val = Object.values(this.props.list_surface_control)
  // for (let sc = 0 ; sc < list_surface_control_val.length ; sc++){
  //   const surface = list_surface_control_val[sc]
  //   const have_vertex = surface.have_vertex

  //   for (let hv = 0 ; hv < have_vertex.length ; hv++){
  //     const vertex_id = have_vertex[hv]
  //     const vertex = this.props.list_vertex_control[vertex_id];
  //   }
  // }
}

export class CanvasComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.VertexInterpretation = this.VertexInterpretation.bind(this);
  }
  // componentDidMount() {
  //   var canvas = document.getElementById("view_canvas");
  //   var context = canvas.getContext("2d");

  //   context.fillRect(0, 0, canvas.width, canvas.height);
  //   let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  //   let width = imageData.width,
  //     height = imageData.height;
  //   console.log("width height", width, height);
  // }


  render() {
    // this.props.list_surface_control
    // this.props.list_vertex_control
    
    
    return (
      <div className="div_CanvasComponent">
        <canvas id="view_canvas" width="1280" height="720"></canvas>
      </div>
    );
  }
}
