#ifndef PlaneCalculation_include
#define PlaneCalculation_include
#include "../stdload/stdload.hpp"
#include "../SurfaceData/SurfaceData.hpp"
#include "../LinearFunction/LinearFunction.hpp"
#include "../ViewPxData/ViewPxData.hpp"

class PlaneCalculationControl
{
private:
    SurfaceData *surface_data;
    ViewPxData *view_px_data;
    std::vector<LinearFunction *> m_linear_function_data;

    int x_width;
    int y_hight;

    int *m_xyz_camera_addition;
    int *m_xyz_camera_multiplication;

public:
    //ViewPxData *view_px_data = ViewPxData(x_width, y_hight);

    PlaneCalculationControl(SurfaceData &send_surface_data, ViewPxData &send_view_px_data, int &send_xyz_camera_addition, int &send_xyz_camera_multiplication)
    {

        surface_data = &send_surface_data;
        view_px_data = &send_view_px_data;

        x_width = view_px_data->Get_x_width();
        y_hight = view_px_data->Get_y_hight();

        m_xyz_camera_addition = &send_xyz_camera_addition;
        m_xyz_camera_multiplication = &send_xyz_camera_multiplication;

        //std::cout << "PlaneCalculationControl コンストラクタ" << std::endl;
    }
    ~PlaneCalculationControl()
    {
        //std::cout << "PlaneCalculationControl デストラクタ" << std::endl;
    }
    void SurfaceCalculation();
    void Slope();
    //void PointDraw(int x, int y, int line_color);

    int GetTime();
};

#endif // C_HPP

//変=&アドレス
//アドレス=✳︎変数