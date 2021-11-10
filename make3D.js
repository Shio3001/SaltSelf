

const select_control = new SelectControl(); //jsの表操作に関すること


function get_time() {
    let date = new Date();
    let time = date.getTime();
    return time;
}



//js_canvas_setup()
let Module = {
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
