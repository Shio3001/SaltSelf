
#include "stdload/stdload.hpp"
#include "integration.hpp"
#include "ViewPxData/ViewPxData.hpp"
#include <emscripten.h>
#include <emscripten/bind.h>
using namespace emscripten;

void ViewRun()
{
    Integration *integration = new Integration;
    //ViewPxData *GetViewPxData
    ViewPxData *GetViewPxData = integration->GetViewPxData();
}

EMSCRIPTEN_BINDINGS(forjs)
{
    function("ViewRun", &ViewRun);
}