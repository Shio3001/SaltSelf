
var salt3D_for_js_interface;
//js_canvas_setup()
var Module = {
    onRuntimeInitialized: function () {
        salt3D_for_js_interface = new Module.ForJsInterface();
        console.log("salt3D_for_js_interface",salt3D_for_js_interface)
        // vertex_control = salt3D_for_js_interface.GetVertexControl();
    }
};

function test_wasm(){
    console.log("salt3D_for_js_interface2",salt3D_for_js_interface)
}