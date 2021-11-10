
function surface_select_for_surface_table(surface_name = "") { //surface_selectで選んだ面をsurfaceに反映する

    if (!surface_name) {
        let idx_surface_list_select = select_control.get_index_surface_list_select();
        let surfaces = vertex_control.GetSurfaceDataKey()
        surface_name = surfaces.get(idx_surface_list_select);
    }
    select_control.remove_surface_select()
    select_control.reflect_surface_select(surface_name)
}


function surface_addvertex() {
    let idx_vertex_select = select_control.get_index_vertex_select();
    let idx_surface_list_select = select_control.get_index_surface_list_select();

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

