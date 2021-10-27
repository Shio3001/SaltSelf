
var canvas = document.getElementById('view_canvas');
var context = canvas.getContext('2d');
context.fillRect(0, 0, canvas.width, canvas.height);
// キャンバス全体のピクセル情報を取得
var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
var width = imageData.width, height = imageData.height;
var pixels = imageData.data;  // ピクセル配列：RGBA4要素で1ピクセル
var salt3D_for_js_interface;
var vertex_control;

let vertex_select = document.getElementById('vertex_select');
let surface_list_select = document.getElementById('surface_list_select');
let surface_select = document.getElementById('surface_select');

var vertex_add_textbox_tag = document.getElementById('vertex_add_textbox_tag');
var vertex_add_textbox_x = document.getElementById('vertex_add_textbox_x');
var vertex_add_textbox_y = document.getElementById('vertex_add_textbox_y');
var vertex_add_textbox_z = document.getElementById('vertex_add_textbox_z');


function select_vertex_for_tagxyz() {

    var idx_vertex_select = vertex_select.selectedIndex;

    console.log(idx_vertex_select)

    if (idx_vertex_select < 0) {
        console.log("選択なし")
        return
    }

    let vertexs = vertex_control.GetVertexXyzDataKey()
    let this_key_vertex_select = vertexs.get(idx_vertex_select);

    let xyz = vertexs.GetXYZ(this_key_vertex_select);

    vertex_add_textbox_tag.value = this_key_vertex_select;
    vertex_add_textbox_x.value = xyz[0];
    vertex_add_textbox_y.value = xyz[1];
    vertex_add_textbox_z.value = xyz[2];

}

function view_run() {
    var idx_surface_list_select = surface_list_select.selectedIndex;

    if (idx_surface_list_select < 0) {
        console.log("選択なし")
        return
    }
    let surfaces = vertex_control.GetSurfaceDataKey()
    let this_key_surface_list_select = surfaces.get(idx_surface_list_select);

    vertex_control.SurfacePlaneCalculation(this_key_surface_list_select)
    var view_data = salt3D_for_js_interface.ViewRun();
    view(view_data);

}

function vertex_addvalue() { //頂点データをC++データに追加する
    let tag = vertex_add_textbox_tag.value;
    let x = vertex_add_textbox_x.value;
    let y = vertex_add_textbox_y.value;
    let z = vertex_add_textbox_z.value;
    console.log(tag)
    console.log(x)
    console.log(y)
    console.log(z)

    let intx = parseFloat(x);
    let inty = parseFloat(y);
    let intz = parseFloat(z);
    vertex_control.AddVertexXyz(tag, intx, inty, intz)
    vertex_for_table()
}



function surface_list_select_for_table() {
    let surface_select_len = surface_list_select.length;
    console.log("初期化数", surface_select_len)

    if (surface_select_len > 0) {
        for (let del = 0; del < surface_select_len; del++) {
            surface_list_select.remove(0);
        }
    }

    let surfaces = vertex_control.GetSurfaceDataKey()
    console.log("追加開始", surfaces.size())
    for (let vn = 0; vn < surfaces.size(); vn++) {
        let op = document.createElement("option");
        op.value = vn;  //value値
        op.text = surfaces.get(vn);   //テキスト値
        surface_list_select.appendChild(op);
    }
}

function vertex_for_table() {

    let vertex_select_len = vertex_select.length;
    console.log("初期化数", vertex_select_len)

    if (vertex_select_len > 0) {
        for (let del = 0; del < vertex_select_len; del++) {
            vertex_select.remove(0);
        }
    }

    let vertexs = vertex_control.GetVertexXyzDataKey()
    console.log("追加開始", vertexs.size())
    for (let vn = 0; vn < vertexs.size(); vn++) {
        let op = document.createElement("option");
        op.value = vn;  //value値
        op.text = vertexs.get(vn);   //テキスト値
        vertex_select.appendChild(op);
    }
}

function surface_addvertex() {
    var idx_vertex_select = vertex_select.selectedIndex;
    var idx_surface_list_select = surface_list_select.selectedIndex;

    console.log(idx_vertex_select)
    console.log(idx_surface_list_select)

    if (idx_vertex_select < 0 || idx_surface_list_select < 0) {
        console.log("選択なし")
        return
    }

    let vertexs = vertex_control.GetVertexXyzDataKey()
    let this_key_vertex_select = vertexs.get(idx_vertex_select);

    let surfaces = vertex_control.GetSurfaceDataKey()
    let this_key_surface_list_select = surfaces.get(idx_surface_list_select);

    console.log("面データ追加開始", vertexs.size(), surfaces.size())

    console.log(this_key_surface_list_select)
    console.log(this_key_vertex_select)

    vertex_control.AddVertexForSurface(this_key_surface_list_select, this_key_vertex_select)

}

function jstable_forcpp() {

}

function draw_button() {

}

function get_time() {
    var date = new Date();
    var time = date.getTime();
    return time;
}

function view(view_data) {

    var HP = get_time();

    // ピクセル単位で操作できる
    for (var y = 0; y < height; ++y) {
        for (var x = 0; x < width; ++x) {
            var base = (y * width + x) * 4;
            // なんかピクセルに書き込む
            pixels[base + 0] = view_data.GetDrawRGBA(x, y, 0);  // Red
            pixels[base + 1] = view_data.GetDrawRGBA(x, y, 1);  // Green
            pixels[base + 2] = view_data.GetDrawRGBA(x, y, 2);  // Blue
            pixels[base + 3] = 255;  // Alpha
        }
    }

    var DP = get_time();

    // 変更した内容をキャンバスに書き戻す
    context.putImageData(imageData, 0, 0);

    var EP = get_time();

    console.log((DP - HP) / 1000);
    console.log((EP - DP) / 1000);

    console.log("60fps参考数値 : " + 1 / 60)
    console.log("30fps参考数値 : " + 1 / 30)
}

//js_canvas_setup()
var Module = {
    onRuntimeInitialized: function () {
        salt3D_for_js_interface = new Module.ForJsInterface();
        vertex_control = salt3D_for_js_interface.GetVertexControl();
        var view_data = salt3D_for_js_interface.ViewRun();
        view(view_data);

        vertex_for_table()
        surface_list_select_for_table()
    }
};
