#include "PlaneCalculation.hpp"

void PlaneCalculationControl::PointDraw(int x, int y, int line_color)
{
    int ipx = x_width * y + x;
    if (ipx < x_width * y_hight && ipx >= 0)
    {
        draw[ipx] = line_color;
    }
}