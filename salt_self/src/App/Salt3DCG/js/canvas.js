import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UUID from "uuidjs";
import Select from 'react-select'

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
  