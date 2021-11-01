

function select_vertex_for_tagxyz() {
    var idx_vertex_select = select_control.get_index_vertex_select();
    console.log(idx_vertex_select)

    if (idx_vertex_select < 0) {
        console.log("選択なし")
        return
    }

    let vertexs = vertex_control.GetVertexXyzDataKey()
    let this_key_vertex_select = vertexs.get(idx_vertex_select);

    console.log(this_key_vertex_select);

    let xyz = vertex_control.GetXYZ(this_key_vertex_select);

    console.log("xyz取得");

    vertex_add_textbox_tag.value = this_key_vertex_select;
    vertex_add_textbox_x.value = xyz.get(0);
    vertex_add_textbox_y.value = xyz.get(1);
    vertex_add_textbox_z.value = xyz.get(2);
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
    select_control.remove_vertex_select()
    select_control.reflect_vertex_select()
}
