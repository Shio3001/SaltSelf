import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UUID from "uuidjs";
import Select from "react-select";
const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const seat_status_css = ["not_speaker_seat", "speaker_seat"];

class SingleSeat {
  constructor(
    line_number,
    column_name,
    line_control_number,
    column_control_number
  ) {
    this.line_number = line_number;
    this.column_name = column_name;
    this.line_control_number = line_control_number;
    this.column_control_number = column_control_number;
    this.seat_status = 0;

    //0 : スピーカー席ではない
    //1 : スピーカー席
  }
}

function SingleSeatMake(column_control_number, line_lengh, column_name) {
  const column_seat = [];

  for (let l = 1; l <= line_lengh; l++) {
    column_seat.push(
      new SingleSeat(l, column_name, l - 1, column_control_number)
    );
  }

  return column_seat;
}

function LineColumnsSeatMake(line_lengh, column_lengh) {
  const all_seat = [];

  console.log("column_lengh", column_lengh);

  if (Number(column_lengh) == 1) {
    all_seat.push(SingleSeatMake(0, line_lengh, "列目"));
    console.log("column_lengh = 1");
  } else {
    for (let c = 0; c < column_lengh; c++) {
      const column_name = alphabet[c];
      all_seat.push(SingleSeatMake(c, line_lengh, column_name));
    }
  }
  return all_seat;
}

class SingleSeatComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const seat_status_css_number =
      seat_status_css[this.props.single_seat.seat_status];
    console.log("seat_status_css_number", seat_status_css_number);

    const onClickSingleSeatStatus = () => {
      this.props.SeatStatusChange(
        this.props.single_seat.line_control_number,
        this.props.single_seat.column_control_number,
        (this.props.single_seat.seat_status + 1) % seat_status_css.length
      );
      console.log("onClickSingleSeatStatus");
    };

    return (
      <div
        className={"div_SingleSeatComponent " + seat_status_css_number}
        onClick={onClickSingleSeatStatus}
      >
        <p>
          {this.props.single_seat.line_number}
          {this.props.single_seat.column_name}
        </p>
      </div>
    );
  }
}
class ColumnsSeatComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // column_seat_component: [],
    };
  }
  componentDidMount() {

  }
  render() {
    const component_convert = () => {
      const temp_component = this.props.one_row.map((fruit, i) => (
        <SingleSeatComponent
          single_seat={fruit}
          SeatStatusChange={this.props.SeatStatusChange}
        />
      ));
      // <ColumnsSeatComponent/>
      return temp_component;
    };

    // this.setState({
    //   column_seat_component: component_convert(),
    // });
    return (
      <div className="div_ColumnsSeatComponent">
        {component_convert().map((fruit, i) => (
          <div className="div_ColumnsSeatComponentMap">{fruit}</div> //SurfaceControlIndividualを追加するmap (list_surface_controlに入っている)
        ))}
      </div>
    );
  }
}

export class SeatMemoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seat_lines: 20,
      seat_columns: 4,
      all_seat: [],
      // all_seat_component: [],
    };

    this.SeatStatusChange = this.SeatStatusChange.bind(this);
    this.OnChangeLines = this.OnChangeLines.bind(this);
    this.OnChangeColumns = this.OnChangeColumns.bind(this);
    this.OnClickMakeSeat = this.OnClickMakeSeat.bind(this);

    this.SeatSentence = () => {
      let temp_text = ""
      temp_text += "あ"
      temp_text += <br />
      temp_text += "あ"
      return <p>{temp_text}</p>
    };

    this.AllSeatComponentMake = () => {
      const temp_component = this.state.all_seat.map((fruit, i) => (
        <ColumnsSeatComponent
          one_row={fruit}
          SeatStatusChange={this.SeatStatusChange}
        />
      ));
      // <ColumnsSeatComponent/>
      return temp_component;

      // this.setState({
      //   all_seat_component: component_convert(),
      // });
    };
  }

  SeatStatusChange(line_control_number, column_control_number, status) {
    console.log(
      "line_control_number, column_control_number",
      line_control_number,
      column_control_number
    );

    const copy_all_seat = Object.assign(this.state.all_seat);
    copy_all_seat[column_control_number][line_control_number].seat_status =
      status;

    this.setState({
      all_seat: copy_all_seat,
    });

    // this.AllSeatComponentMake();
  }

  OnChangeLines(event) {
    const number = event.target.value;
    this.setState({
      seat_lines: number,
    });
  }

  OnChangeColumns(event) {
    let number = event.target.value;

    if (number > 10) {
      number = 10;
    }

    this.setState({
      seat_columns: number,
    });
  }

  OnClickMakeSeat() {
    console.log("座席を生成します");
    this.setState({
      all_seat: LineColumnsSeatMake(
        this.state.seat_lines,
        this.state.seat_columns
      ),
    });

    // this.AllSeatComponentMake();
  }

  render() {
    return (
      <div className="div_SeatMemoComponent">
        <div className="div_SeatMemoComponentOptionArea">
          <p>1両あたりの座席列数を入力(列数)</p>
          <p>
            <input
              type="number"
              className="textbox_SeatMemo"
              value={this.state.seat_lines}
              onChange={this.OnChangeLines}
            />
          </p>

          <p>1列あたりの座席数を入力(行数)</p>
          <p>
            <input
              type="number"
              className="textbox_SeatMemo"
              value={this.state.seat_columns}
              onChange={this.OnChangeColumns}
            />
          </p>

          <input
            type="button"
            value="座席データを生成する"
            className="input_SeatMemo_init"
            onClick={this.OnClickMakeSeat.bind(
              this,
              this.state.seat_lines,
              this.state.seat_columns
            )}
          />

          <p>
            ボタンを押すと座席表が生成されます。
            <br />
            すでに入力済みのデータは出力テキストボックス欄を含めて全て初期化されますのでご注意ください。
            <br />
            通路上スピーカーの場合は行数を1にしてください。
            <br />
            <br />
            生成後、スピーカー席がある場所をタップしてください。
          </p>
        </div>
        <div className="div_SeatMemoComponentSeatArea">
          {this.AllSeatComponentMake().map((fruit, i) => (
            <div className="div_SeatMemoComponentSeatAreaMap">{fruit}</div> //SurfaceControlIndividualを追加するmap (list_surface_controlに入っている)
          ))}
        </div>

        <p>{this.SeatSentence()}</p>
      </div>
    );
  }
}
