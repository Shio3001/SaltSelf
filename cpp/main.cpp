#include "stdload/stdload.hpp"
#include "integration.hpp"
#include "VertexXyzData/VertexXyzData.hpp"
#include "SurfaceData/SurfaceData.hpp"
#include "LinearFunction/LinearFunction.hpp"
#include "PlaneCalculation/PlaneCalculation.hpp"
#include "VertexControl/VertexControl.hpp"

int main()
{
    Integration *integration = new Integration;
    ViewPxData view_px_data = integration->GetViewPxData();
    view_px_data.OpenCvOutput();
    //ViewPxData GetViewPxDataHaveVertexControl = vertex_control->GetViewPxDataHaveVertexControl();

    //cout << "終了" << endl;

    //vertex_control->DeleteVertexXyz(key); //テスト用コード
}

// g++ -o main main.cpp -std=c++14

//https://ttsuki.github.io/styleguide/cppguide.ja.html#File_Names
//グーグル命名規則