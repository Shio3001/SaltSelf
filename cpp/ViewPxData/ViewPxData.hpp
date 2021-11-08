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
        std::cout << "動的確保 " << x_width << " " << y_hight << std::endl;
        draw = new int[y_hight * x_width * 4];

        for (int i = 0; i < y_hight * x_width * 4; i++)
        {
            draw[i] = 0;
        }

        std::cout << "確保済" << std::endl;
    }
    ~ViewPxData()
    {

        std::cout << "メモリ解放" << std::endl;
        delete[] draw;
    }

    void PointDraw(int x, int y, int color_r, int color_g, int color_b, int color_a)
    {
        int ipx = (x_width * y + x) * 4;
        bool x_width_section = x < x_width;
        bool y_width_section = y < y_hight;

        bool ipx_section = ipx < x_width * y_hight * 4;
        bool ipx_0 = ipx >= 0;

        if (x_width_section && y_width_section && ipx_section && ipx_0)
        {
            int *R = draw + ipx;
            *R = color_r;
            int *G = draw + ipx + 1;
            *G = color_g;
            int *B = draw + ipx + 2;
            *B = color_b;
            int *A = draw + ipx + 3;
            *A = color_a;
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

    int GetDrawRGB(int x, int y, int rgba)
    {
        int ipx = (x_width * y + x) * 4;
        return draw[ipx + rgba];
    }

    int GetDrawRGBA(int x, int y, int rgba)
    {
        int ipx = (x_width * y + x) * 4;
        double A = draw[ipx + 3];
        int return_color = draw[ipx + rgba] * (A / 255);
        return return_color;
    }

    int *GetDrawArray()
    {
        return draw;
    }

    void OpenCvOutput();
};

#endif // C_HPP
