#ifndef ViewPxData_include
#define ViewPxData_include
#include "../stdload/stdload.hpp"
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
    int Get_x_width()
    {
        return x_width;
    }
    int Get_y_hight()
    {
        return y_hight;
    }

    int GetDraw(int x, int y)
    {
        int ipx = x_width * y + x;
        return draw[ipx];
    }

    int *GetDrawArray()
    {
        return draw;
    }

    void OpenCvOutput();
};

#endif // C_HPP
