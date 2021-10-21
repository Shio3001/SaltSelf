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

#include "VertexXyzData/VertexXyzData.hpp"
#include "SurfaceData/SurfaceData.hpp"
#include "LinearFunction/LinearFunction.hpp"
#include "PlaneCalculation/PlaneCalculation.hpp"
#include "VertexControl/VertexControl.hpp"

class Integration
{
    ViewPxData *ViewPxDataHaveIntegration;

public:
    Integration()
    {
        VertexControl *vertex_control = new VertexControl;
        ViewPxDataHaveIntegration = vertex_control->GetViewPxDataHaveVertexControl();

        delete vertex_control;
    }
    ~Integration()
    {
    }
    ViewPxData GetViewPxDataHaveIntegration()
    {
        return ViewPxDataHaveIntegration;
    }
};