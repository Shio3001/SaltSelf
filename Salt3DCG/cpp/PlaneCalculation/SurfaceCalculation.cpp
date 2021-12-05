#include "PlaneCalculation.hpp"
void PlaneCalculationControl::SurfaceCalculation()
{

    std::cout << "SurfaceCalculation sta" << std::endl;

    int sum = 0;

    int sec_since_epoch1 = GetTime();

    int linear_size = m_linear_function_data.size();

    //std::cout << "み" << std::endl;
    for (int x = 0; x < x_width; x++)
    {
        for (int fi_add = 0; fi_add < linear_size; fi_add++)
        {
            //std::cout << "now_linear_function" << std::endl;
            LinearFunction *now_linear_function = m_linear_function_data[fi_add];
            //std::cout << "now_linear_function2" << std::endl;
            int returnY = now_linear_function->XtoY(x);
            //std::cout << ipx << std::endl;
        }
    }
    //std::cout << "出" << std::endl;

    for (int x = 0; x < x_width; x++)
    {
        for (int fi_add = 0; fi_add < linear_size; fi_add++)
        {
            LinearFunction *now_linear_function = m_linear_function_data[fi_add];
            int returnY = now_linear_function->XtoY(x);
            view_px_data->PointDraw(x, returnY, 200, 200, 200, 255);
        }
    }

    int debug_x = 70;
    int debug_y = 600;
    for (int y = 0; y < y_hight; y++)
    {
        for (int x = 0; x < x_width; x++)
        {

            int *fx = new int[linear_size];

            int left = 0;
            int range_query = 0;

            int corner = 0;

            for (int fi_add = 0; fi_add < linear_size; fi_add++)
            {

                LinearFunction *now_linear_function = m_linear_function_data[fi_add];
                double returnX = now_linear_function->YtoX(y);
                int now_range_query = now_linear_function->RangeQuery(y);

                bool fx_add_bool = now_range_query != 0 && corner <= 1;

                if (fx_add_bool)
                {
                    view_px_data->PointDraw(returnX, y, 255, 255, 255, 255);
                    fx[fi_add - left] = returnX;
                }
                else
                {
                    left += 1;
                }

                range_query += now_range_query;

                //ソート https://codezine.jp/article/detail/6020
            }

            int linear_search_from_before = -1;

            for (int fi_search = 0; fi_search < linear_size - left; fi_search++)
            {

                if (fx[fi_search] <= x)
                {
                    linear_search_from_before += 1;
                }
            }

            int mod2 = linear_search_from_before % 2;

            //std::cout << "linear_size " << linear_size << " left " << left << std::endl;

            // if (mod2 == 1 && range_query != 0)
            // {
            //     std::cout << linear_search_from_before << " " << range_query << " " << x << " " << y << std::endl;
            // }

            if (mod2 == 0 && range_query != 0) //
            {
                sum += 1;
                view_px_data->PointDraw(x, y, 200, 10, 10, 255);
            }
            delete[] fx;
        }
    }
    //std::cout << "総面積 " << sum << std::endl;

    int sec_since_epoch2 = GetTime();

    //std::cout << sum << std::endl;

    //std::cout << "SurfaceCalculation end" << std::endl;

    //int *draw_pointer = view_px_data->GetDraw();

    //OpenCvOutput();

    int sec_since_epoch3 = GetTime();

    std::cout << sec_since_epoch1 << std::endl;
    std::cout << sec_since_epoch2 << std::endl;
    std::cout << sec_since_epoch3 << std::endl;

    std::cout << "SurfaceCalculation end" << std::endl;
}