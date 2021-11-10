function position(x, y, z) {

    console.log("position 変更", x, y, z)

    vertex_control.CameraCoordinates(x, y, z);

    let surfaces = vertex_control.GetSurfaceDataKey()
    let idx_surface_list_select = select_control.get_index_surface_list_select()


    if (idx_surface_list_select < 0) {
        return
    }

    let this_key_surface_list_select = surfaces.get(idx_surface_list_select);

    vertex_control.NewViewPx(1280, 720)
    vertex_control.SurfacePlaneCalculation(this_key_surface_list_select)
    let view_data = vertex_control.GetView();
    view(view_data);
    vertex_control.DeleteViewPx()
}

function keydownfunc(event) {
    console.log("押されました", event.key)
    if (event.key === "a") { //左矢印キー
        position(-10, 0, 0)
    }
    if (event.key === "w") { //上矢印キー
        position(0, -10, 0)
    }
    if (event.key === "d") { //右矢印キー
        position(10, 0, 0)
    }
    if (event.key === "s") { //下矢印キー
        position(0, 10, 0)
    }
}

addEventListener("keydown", keydownfunc);

// function positionZ() {

//     vertex_control.CameraCoordinates(0, 0, 10);
//     vertex_control.SurfacePlaneCalculation(this_key_surface_list_select)
//     let view_data = vertex_control.GetView();
//     view(view_data);
// }

//https://original-game.com/introduction-to-javascript-move-a-character-by-input/