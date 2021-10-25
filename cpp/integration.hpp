#include "stdload/stdload.hpp"
#include "ViewPxData/ViewPxData.hpp"
#include "VertexXyzData/VertexXyzData.hpp"
#include "SurfaceData/SurfaceData.hpp"
#include "LinearFunction/LinearFunction.hpp"
#include "PlaneCalculation/PlaneCalculation.hpp"
#include "VertexControl/VertexControl.hpp"

class Integration
{

    int x_width = 1280;
    int y_hight = 720;
    ViewPxData *view_px_data = new ViewPxData(x_width, y_hight);

public:
    Integration()
    {
        fs::create_directory("salt3Dtemp");
        VertexControl *vertex_control = new VertexControl(view_px_data);
        delete vertex_control;
    }
    ~Integration()
    {
        delete view_px_data;
    }
    ViewPxData GetViewPxData()
    {
        return *view_px_data;
    }
};