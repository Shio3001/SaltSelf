
function view_run() {
    var idx_surface_list_select = select_control.get_index_surface_list_select();

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

function view(view_data) {

    var pixels = imageData.data;  // ピクセル配列：RGBA4要素で1ピクセル
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
