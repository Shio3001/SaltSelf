
#include "stdload/stdload.hpp"
#include "integration.hpp"
#include "ViewPxData/ViewPxData.hpp"
#include "VertexControl/VertexControl.hpp"
#include <emscripten.h>
#include <emscripten/bind.h>

using namespace emscripten;

class ForJsInterface
{
private:
    Integration *integration = new Integration;

public:
    ForJsInterface()
    {
    }
    ViewPxData ViewRun()
    {
        ViewPxData get_view_px_data = integration->GetViewPxData();
        return get_view_px_data;
    }

    VertexControl GetVertexControl()
    {
        VertexControl get_vertex_control = integration->GetVertexControl();
        return get_vertex_control;
    }
};

EMSCRIPTEN_BINDINGS(forjs)
{
    register_vector<std::string>("vector<std::string>");

    class_<ForJsInterface>("ForJsInterface")
        .constructor<>()
        .function("ViewRun", &ForJsInterface::ViewRun)
        .function("GetVertexControl", &ForJsInterface::GetVertexControl);
    class_<ViewPxData>("ViewPxData")
        .constructor<int, int>()
        .function("PointDraw", &ViewPxData::PointDraw)
        .function("Get_x_width", &ViewPxData::Get_x_width)
        .function("Get_y_hight", &ViewPxData::Get_y_hight)
        .function("GetDrawRGB", &ViewPxData::GetDrawRGB)
        .function("GetDrawRGBA", &ViewPxData::GetDrawRGBA);
    class_<VertexControl>("VertexControl")
        //.constructor<ViewPxData>()
        .function("SurfacePlaneCalculation", &VertexControl::SurfacePlaneCalculation)
        .function("SurfaceSpatialCalculation", &VertexControl::SurfaceSpatialCalculation)
        .function("AddSurface", &VertexControl::AddSurface)
        .function("AddVertexXyz", &VertexControl::AddVertexXyz)
        .function("DeleteVertexXyz", &VertexControl::DeleteVertexXyz)
        .function("GetVertexXyzDataKey", &VertexControl::GetVertexXyzDataKey);
}
