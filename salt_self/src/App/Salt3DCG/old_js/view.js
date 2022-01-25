
function view_run() {
    let surfaces = vertex_control.GetSurfaceDataKey()
    let idx_surface_list_select = select_control.get_index_surface_list_select()

    if (idx_surface_list_select < 0) {
        return
    }

    let AP = get_time();

    vertex_control.NewViewPx(1280, 720)
    let this_key_surface_list_select = surfaces.get(idx_surface_list_select);
    vertex_control.SurfacePlaneCalculation(this_key_surface_list_select)
    let view_data = vertex_control.GetView();
    let BP = get_time();

    console.log((BP - AP) / 1000);

    view(view_data);
    vertex_control.DeleteViewPx()
}

function view(view_data) {

    let pixels = imageData.data;  // ピクセル配列：RGBA4要素で1ピクセル
    let HP = get_time();

    // ピクセル単位で操作できる
    for (let y = 0; y < height; ++y) {
        for (let x = 0; x < width; ++x) {
            let base = (y * width + x) * 4;
            // なんかピクセルに書き込む
            pixels[base + 0] = view_data.GetDrawRGBA(x, y, 0);  // Red
            pixels[base + 1] = view_data.GetDrawRGBA(x, y, 1);  // Green
            pixels[base + 2] = view_data.GetDrawRGBA(x, y, 2);  // Blue

            pixels[base + 3] = 255;  // Alpha
        }
    }

    let DP = get_time();

    // 変更した内容をキャンバスに書き戻す
    context.putImageData(imageData, 0, 0);

    let EP = get_time();

    console.log((DP - HP) / 1000);
    console.log((EP - DP) / 1000);

    console.log("60fps参考数値 : " + 1 / 60)
    console.log("30fps参考数値 : " + 1 / 30)
}
