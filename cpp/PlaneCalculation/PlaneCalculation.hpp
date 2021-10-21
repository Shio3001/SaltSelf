#ifndef PlaneCalculation_include
#define PlaneCalculation_include
#include "../stdload/stdload.hpp"
#include "../SurfaceData/SurfaceData.hpp"
#include "../LinearFunction/LinearFunction.hpp"
#include "../ViewPxData/ViewPxData.hpp"
using namespace std;

class PlaneCalculationControl
{
private:
    SurfaceData *surface_data;
    ViewPxData *view_px_data;
    std::vector<LinearFunction *> m_linear_function_data;

    int x_width;
    int y_hight;

public:
    //ViewPxData *view_px_data = ViewPxData(x_width, y_hight);

    PlaneCalculationControl(int send_x_width, int send_y_hight, SurfaceData &send_surface_data, ViewPxData &send_view_px_data)
    {
        x_width = send_x_width;
        y_hight = send_y_hight;

        surface_data = &send_surface_data;
        view_px_data = &send_view_px_data;
        //cout << "PlaneCalculationControl コンストラクタ" << endl;
    }
    ~PlaneCalculationControl()
    {
        //cout << "PlaneCalculationControl デストラクタ" << endl;
    }
    void SurfaceCalculation();
    void Slope();
    //void PointDraw(int x, int y, int line_color);
    void OpenCvOutput();
    int GetTime();
};

#endif // C_HPP

//変=&アドレス
//アドレス=✳︎変数