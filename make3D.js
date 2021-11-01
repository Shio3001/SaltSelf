

const select_control = new SelectControl(); //jsの表操作に関すること


function get_time() {
    var date = new Date();
    var time = date.getTime();
    return time;
}



//js_canvas_setup()
var Module = {
    onRuntimeInitialized: function () {
        salt3D_for_js_interface = new Module.ForJsInterface();
        vertex_control = salt3D_for_js_interface.GetVertexControl();
        var view_data = salt3D_for_js_interface.ViewRun();
        view(view_data);

        select_control.remove_vertex_select()
        select_control.reflect_vertex_select()
        surface_list_select_for_table()
    }
};
