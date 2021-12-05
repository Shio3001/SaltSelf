let survey_surface_key = document.getElementById('survey_surface_key');
let survey_vertex_key = document.getElementById('survey_vertex_key');
let survey_vertex_number = document.getElementById('survey_vertex_number');

function consistency_survey() {
    let surface_key = survey_surface_key.value
    let vertex_key = survey_vertex_key.value
    let vertex_number = parseFloat(survey_vertex_number.value)
    vertex_control.ConsistencySurvey(surface_key, vertex_key, vertex_number)
}