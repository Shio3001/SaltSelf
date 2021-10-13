#ifndef PlaneCalculation_include
#define PlaneCalculation_include
#include <bits/stdc++.h>

#include "../SurfaceData/SurfaceData.hpp"
#include "../LinearFunction/LinearFunction.hpp"
using namespace std;
class PlaneCalculationControl
{
private:
    SurfaceData *surface_data;
    std::vector<LinearFunction *> m_linear_function_data;

    int x_width = 1280;
    int y_hight = 720;

    int *draw = new int[y_hight * x_width];

public:
    PlaneCalculationControl(SurfaceData &send_surface_data)
    {
        surface_data = &send_surface_data;
        //cout << "PlaneCalculationControl コンストラクタ" << endl;
    }
    ~PlaneCalculationControl()
    {
        //cout << "PlaneCalculationControl デストラクタ" << endl;
    }
    void SurfaceCalculation();
    void Slope();
    void PointDraw(int x, int y, int line_color);
    void OpenCvOutput(int draw_pointer[], int x_width, int y_hight);
    int GetTime();
};

#endif // C_HPP
