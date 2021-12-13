
import React from 'react';
import ReactDOM from 'react-dom';



var js_file_list = ["js/setup.js", "js/surface_list.js", "js/surface.js", "js/vertex.js", "js/view.js", "js/survey.js", "js/user_operation.js", "make3D.js", "cpp/forjs/wasm_forweb.js"]
for (var i = 0; i < js_file_list.length; i++) {
    const script = document.createElement("script");
    script.src = js_file_list[i];
    script.async = true;
    document.body.appendChild(script);
}

const select_control = new SelectControl(); //jsの表操作に関すること

function get_time() {
    let date = new Date();
    let time = date.getTime();
    return time;
}
//js_canvas_setup()
var Module = {
    onRuntimeInitialized: function () {
        salt3D_for_js_interface = new Module.ForJsInterface();
        vertex_control = salt3D_for_js_interface.GetVertexControl();

        console.log("初回 sta : NewViewPx")
        vertex_control.NewViewPx(1280, 720);
        console.log("初回 end : NewViewPx")

        console.log("初回 sta : GetView")
        let view_data = vertex_control.GetView();
        console.log("初回 end : GetView")

        view(view_data);
        vertex_control.DeleteViewPx();
        select_control.remove_vertex_select()
        select_control.reflect_vertex_select()
        surface_list_select_for_table()
        console.log("初期設定終了")
    }
};



class Make3D extends React.Component {
    render() {
        return (
            <div>
                <canvas ref="view_canvas" width="1280" height="720"></canvas><br />
                <input type="button" value="描画" onclick="view_run();" /><br />

                <p>w 視点移動 上へ</p><br />
                <p>s 視点移動 下へ</p><br />
                <p>a 視点移動 左へ</p><br />
                <p>d 視点移動 右へ</p><br />
                <p>f 拡大</p><br />
                <p>g 縮小</p><br />

                <p>頂点データ</p><br />
                <select ref="vertex_select" onchange="select_vertex_for_tagxyz();" size="10"></select><br />

                <p>頂点を入力してください</p><br />
                <p ref="now_vertex_control">現在操作中:</p><br />
                <p>tag</p>
                <form><input type="text" ref="vertex_add_textbox_tag" /></form>
                <p>x</p>
                <form><input type="number" ref="vertex_add_textbox_x" /></form>
                <p>y</p>
                <form><input type="number" ref="vertex_add_textbox_y" /></form>
                <p>z</p>
                <form><input type="number" ref="vertex_add_textbox_z" /></form>
                <input type="button" value="確定" onclick="vertex_addvalue();" /><br />

                <p>面リストデータ</p><br />
                <select ref="surface_list_select" size="10" onchange="surface_select_for_surface_table();"></select><br />
                <input type="button" value="面リストに追加する" onclick="{surface_addvertex}" /><br />

                <p>面データの生成</p>
                <form><input type="text" ref="add_surface_textbox" /></form><br />
                <input type="button" value="面データを追加する" onclick="add_surface();" /><br />

                <p>個別面データ</p><br />
                <p ref="now_surface_list_control">現在操作中:</p><br />
                <select ref="surface_select" size="10">
                </select><br />

                <p>検証用</p><br />
                <p>survey_surface_key</p>
                <form><input type="text" ref="survey_surface_key" /></form><br />
                <p>survey_vertex_key</p>
                <form><input type="text" ref="survey_vertex_key" /></form><br />
                <p>survey_vertex_number</p>
                <form><input type="number" ref="survey_vertex_number" /></form><br />
                <input type="button" value="検証" onclick="consistency_survey();" /><br />
                {/* 
                <script src="{js/setup.js}"></script>
                <script src="{js/surface_list.js}"></script >
                <script src="{js/surface.js}"></script >
                <script src="{}"></script >
                <script src="{}"></script >
                <script src="{js/survey.js}" ></script >
                <script src="{js/user_operation.js}" ></script >
                <script src="{make3D.js}"></script>
                <script src="{cpp/forjs/wasm_forweb.js}" ></script> */}
            </div >
        );
    }
}
export default Make3D;
