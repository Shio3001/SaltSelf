#ifndef ViewPxData_include
#define ViewPxData_include
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

#endif // C_HPP
