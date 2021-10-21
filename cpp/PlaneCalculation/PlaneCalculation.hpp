#ifndef PlaneCalculation_include
#define PlaneCalculation_include
#include <bits/stdc++.h>

#include "../SurfaceData/SurfaceData.hpp"
#include "../LinearFunction/LinearFunction.hpp"
using namespace std;

class ViewPxData
{
private:
    int x_width;
    int y_hight;
    int *draw;

public:
    ViewPxData(int send_x_width, int send_y_hight)
    {
        x_width = send_x_width;
        y_hight = send_y_hight;
        draw = new int[y_hight * x_width];
    }
    ~ViewPxData()
    {
        delete &draw;
    }
    void PointDraw(int x, int y, int color)
    {
        int ipx = x_width * y + x;
        bool x_width_section = x < x_width;
        bool y_width_section = y < y_hight;

        bool ipx_section = ipx < x_width * y_hight;
        bool ipx_0 = ipx >= 0;

        if (x_width_section && y_width_section && ipx_section && ipx_0)
        {
            int *this_access = draw + ipx;
            *this_access = color;
        }
    }
    int *GetDraw()
    {
        return draw;
    }
};

class PlaneCalculationControl
{
private:
    SurfaceData *surface_data;
    std::vector<LinearFunction *> m_linear_function_data;

    int x_width = 1280;
    int y_hight = 720;

public:
    ViewPxData view_px_data = ViewPxData(x_width, y_hight);

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
    //void PointDraw(int x, int y, int line_color);
    void OpenCvOutput(int draw_pointer[], int x_width, int y_hight);
    int GetTime();

    ViewPxData *GetViewPxData()
    {
        return *view_px_data;
    }
};

#endif // C_HPP

//変=&アドレス
//アドレス=✳︎変数