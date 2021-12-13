
let canvas = document.getElementById('view_canvas');
let context = canvas.getContext('2d');

context.fillRect(0, 0, canvas.width, canvas.height);
let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
let width = imageData.width, height = imageData.height;

let salt3D_for_js_interface;
let vertex_control;

let vertex_select = document.getElementById('vertex_select');
let surface_list_select = document.getElementById('surface_list_select');
let surface_select = document.getElementById('surface_select');

let vertex_add_textbox_tag = document.getElementById('vertex_add_textbox_tag');
let vertex_add_textbox_x = document.getElementById('vertex_add_textbox_x');
let vertex_add_textbox_y = document.getElementById('vertex_add_textbox_y');
let vertex_add_textbox_z = document.getElementById('vertex_add_textbox_z');
let add_surface_textbox = document.getElementById('add_surface_textbox');

class SelectControl {
    remove_vertex_select() {
        let vertex_select_len = vertex_select.length;
        console.log("初期化数", vertex_select_len)

        if (vertex_select_len > 0) {
            for (let del = 0; del < vertex_select_len; del++) {
                vertex_select.remove(0);
            }
        }
    }
    remove_surface_list_select() {
        let surface_select_len = surface_list_select.length;
        console.log("初期化数", surface_select_len)

        if (surface_select_len > 0) {
            for (let del = 0; del < surface_select_len; del++) {
                surface_list_select.remove(0);
            }
        }
    }
    remove_surface_select() {
        let surface_select_len = surface_select.length;
        console.log("初期化数", surface_select_len)

        if (surface_select_len > 0) {
            for (let del = 0; del < surface_select_len; del++) {
                surface_select.remove(0);
            }
        }
    }
    reflect_vertex_select() {
        let vertexs = vertex_control.GetVertexXyzDataKey()
        console.log("追加開始", vertexs.size())
        for (let vn = 0; vn < vertexs.size(); vn++) {
            let op = document.createElement("option");
            op.value = vn;  //value値
            op.text = vertexs.get(vn);   //テキスト値
            vertex_select.appendChild(op);
        }
    }
    reflect_surface_list_select() {
        let surfaces = vertex_control.GetSurfaceDataKey()
        console.log("追加開始", surfaces.size())
        for (let vn = 0; vn < surfaces.size(); vn++) {
            let op = document.createElement("option");
            op.value = vn;  //value値
            op.text = surfaces.get(vn);   //テキスト値
            surface_list_select.appendChild(op);
        }
    }
    reflect_surface_select(surface_name) {
        let vertex_from_surface = vertex_control.GetVertexXyzDataKeyFromSurface(surface_name)
        console.log("追加開始", vertex_from_surface.size())
        for (let vn = 0; vn < vertex_from_surface.size(); vn++) {
            let op = document.createElement("option");
            op.value = vn;  //value値
            op.text = vertex_from_surface.get(vn);   //テキスト値
            surface_select.appendChild(op);
        }
    }
    get_length_vertex_select() {
        let length_vertex_select = vertex_select.length;
        return length_vertex_select;
    }
    get_length_surface_list_select() {
        let length_surface_list_select = surface_list_select.length;
        return length_surface_list_select;
    }
    get_length_surface_select() {
        let length_surface_select = surface_select.length;
        return length_surface_select;
    }
    get_index_vertex_select() {
        let idx_vertex_select = vertex_select.selectedIndex;
        return idx_vertex_select;
    }
    get_index_surface_list_select() {
        let idx_surface_list_select = surface_list_select.selectedIndex;
        return idx_surface_list_select;
    }
    get_index_surface_select() {
        let idx_surface_select = surface_select.selectedIndex;
        return idx_surface_select;
    }
}