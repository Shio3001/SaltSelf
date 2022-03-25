import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UUID from "uuidjs";
import Select from "react-select";
export class SeatCanvasComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {


    };

    this.seat_fill_width = 100
    this.seat_fill_height = 100

    this.top_text_area = 200
    this.bottom_text_area = 50
    // this.salt3D_for_js_interface = null;
    // this.VertexInterpretation = this.VertexInterpretation.bind(this);
  }
  componentDidMount() {

  }

  componentDidUpdate(){
    const view_canvas_init = document.getElementById("seat_view_canvas");
    const context_init = view_canvas_init.getContext("2d");
    context_init.fillStyle = "rgba(220,220,220,1)";
    context_init.fillRect(0, 0, view_canvas_init.width, view_canvas_init.height);
    console.log("context_init")

    context_init.fillStyle = "rgba(50,50,50,1)";
    context_init.fillRect(0, 0, view_canvas_init.width, this.top_text_area);
    context_init.fillRect(0, view_canvas_init.height - this.bottom_text_area, view_canvas_init.width, this.bottom_text_area);

    
    context_init.textAlign = "center"
    context_init.fillStyle = "rgba(255,255,255,1)";

    context_init.font = "40px sans-serif";
    context_init.fillText(this.props.train_title, view_canvas_init.width / 2, 40 + 10);

    context_init.font = "20px sans-serif";
    context_init.fillText(this.props.train_memo, view_canvas_init.width / 2, this.top_text_area / 2 + 10);

    context_init.font = "40px sans-serif";
    context_init.fillText(this.props.district_Upper + " 方面", view_canvas_init.width / 2, this.top_text_area - 10);
    context_init.fillText(this.props.district_Lower + " 方面", view_canvas_init.width / 2, view_canvas_init.height - 10);

    const seat_draw = (seat_x, seat_y, seat_name) => {
      const view_canvas = document.getElementById("seat_view_canvas");
      const fill_x = this.seat_fill_width * seat_x;
      const fill_y = this.seat_fill_height * seat_y;

      const seat_background = view_canvas.getContext("2d");

      seat_background.fillStyle = "rgba(10,100,255,1)";

        const draw_line = 2

      seat_background.fillRect(
        fill_x + draw_line,
        fill_y + draw_line + this.top_text_area,

        this.seat_fill_width - draw_line * 2,
        this.seat_fill_height - draw_line * 2
      );

      const seat_text = view_canvas.getContext("2d");
      seat_text.font = "30px sans-serif";
      seat_text.textAlign = "center"
      seat_text.fillStyle = "rgba(255,255,255,1)";
      seat_text.fillText(seat_name, fill_x + this.seat_fill_width / 2, fill_y + this.seat_fill_height * 0.63 + this.top_text_area);

      console.log("canvas_componentDidUpdate")
    };

    const seat_plot = () => {
      const all_seat = this.props.all_seat;

      for (let li = 0; li < all_seat.length; li++) {
        const column_seat = all_seat[li];

        for (let ci = 0; ci < column_seat.length; ci++) {
          const this_seat = column_seat[ci];
        //   {this.props.single_seat.line_number}
        //   {this.props.single_seat.column_name}
            if (this_seat.seat_status == 1){
                seat_draw(li,ci,this_seat.line_number + this_seat.column_name)
            }
        }
      }
    };

    seat_plot()

  }

  render() {
    // this.props.list_surface_control
    // this.props.list_vertex_control

    console.log("this.props.seat_lenght",this.props.seat_lenght_x,this.props.seat_lenght_y)

    let draw_width = Math.max(this.props.seat_lenght_x * this.seat_fill_width,400)
    let draw_height = (this.props.seat_lenght_y * this.seat_fill_height) + this.top_text_area + this.bottom_text_area


    return (
      <div className="div_CanvasComponent">
        <canvas
          id="seat_view_canvas"
          className="seat_view_canvas"
          width={draw_width}
          height={draw_height}
        ></canvas>
      </div>
    );
  }
}
