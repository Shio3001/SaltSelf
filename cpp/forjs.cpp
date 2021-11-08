
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

    VertexControl GetVertexControl()
    {
        VertexControl get_vertex_control = integration->GetVertexControl();
        return get_vertex_control;
    }
};

EMSCRIPTEN_BINDINGS(forjs)
{
    register_vector<std::string>("vector<std::string>");
    register_vector<int>("vector<int>");

    class_<ForJsInterface>("ForJsInterface")
        .constructor<>()
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
        .function("NewViewPx", &VertexControl::NewViewPx)
        .function("DeleteViewPx", &VertexControl::DeleteViewPx)
        .function("GetView", &VertexControl::GetView)
        .function("ConsistencySurvey", &VertexControl::ConsistencySurvey)
        .function("SurfacePlaneCalculation", &VertexControl::SurfacePlaneCalculation)
        .function("SurfaceSpatialCalculation", &VertexControl::SurfaceSpatialCalculation)
        .function("AddSurface", &VertexControl::AddSurface)
        .function("AddVertexXyzConsiderationChange", &VertexControl::AddVertexXyzConsiderationChange)
        .function("AddVertexXyz", &VertexControl::AddVertexXyz)
        .function("AddVertexForSurface", &VertexControl::AddVertexForSurface)
        .function("DeleteVertexXyz", &VertexControl::DeleteVertexXyz)
        .function("GetVertexXyzDataKeyFromSurface", &VertexControl::GetVertexXyzDataKeyFromSurface)
        .function("GetSurfaceDataKey", &VertexControl::GetSurfaceDataKey)
        .function("GetXYZ", &VertexControl::GetXYZ)
        //.function("SetViewPxData", &VertexControl::SetViewPxData)
        .function("GetVertexXyzDataKey", &VertexControl::GetVertexXyzDataKey);
}
