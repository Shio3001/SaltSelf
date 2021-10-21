//3D処理用

// 16ビット モノラル
#include <bits/stdc++.h>
#include <math.h>
#include <stdio.h>
#include <sys/time.h>
//#include <boost/python.hpp>
//#include <boost/python/numpy.hpp>
#include <iomanip>
using namespace std;
//namespace py = boost::python;
//namespace np = boost::python::numpy;
#include <chrono>
#include <ctime>

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
        VertexControl *vertex_control = new VertexControl(&view_px_data);
        delete vertex_control;
    }
    ~Integration()
    {
    }
    ViewPxData GetViewPxDataHaveIntegration()
    {
        return view_px_data;
    }
};