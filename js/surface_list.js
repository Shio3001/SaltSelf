function surface_list_select_for_table() {
    select_control.remove_surface_list_select()
    select_control.reflect_surface_list_select()
}


function add_surface() {
    let surface_tag = add_surface_textbox.value;
    vertex_control.AddSurface(surface_tag);
    //surface_select_for_table();
    select_control.remove_surface_list_select()
    select_control.reflect_surface_list_select()
}