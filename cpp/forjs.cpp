
#include "stdload/stdload.hpp"
#include "integration.hpp"
#include "ViewPxData/ViewPxData.hpp"
#include <emscripten.h>
#include <emscripten/bind.h>
using namespace emscripten;

ViewPxData ViewRun()
{
    Integration *integration = new Integration;
    //ViewPxData *GetViewPxData
    ViewPxData GetViewPxData = integration->GetViewPxData();
    return GetViewPxData;
}

EMSCRIPTEN_BINDINGS(forjs)
{
    function("ViewRun", &ViewRun);

    class_<ViewPxData>("ViewPxData")
        .constructor<int, int>()
        .function("PointDraw", &ViewPxData::PointDraw)
        .function("Get_x_width", &ViewPxData::Get_x_width)
        .function("Get_y_hight", &ViewPxData::Get_y_hight)
        //.function("GetDrawArray", &ViewPxData::GetDrawArray)
        .function("GetDrawRGB", &ViewPxData::GetDrawRGB)
        .function("GetDrawRGBA", &ViewPxData::GetDrawRGBA);
}